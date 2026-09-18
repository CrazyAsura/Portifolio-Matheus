"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useDevicePerformance } from "@/app/lib/performance";

interface ThreeSynapseProps {
  className?: string;
  interactive?: boolean;
}

export default function ThreeSynapse({ className = "", interactive = true }: ThreeSynapseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLowPower, prefersReducedMotion } = useDevicePerformance();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isVisible = true;
    let animationFrameId: number;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    // 2. Renderer setup with adaptive pixel ratio
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isLowPower,
      powerPreference: isLowPower ? "low-power" : "high-performance",
    });

    const dpr = isLowPower ? 1 : Math.min(window.devicePixelRatio, 1.5);
    renderer.setPixelRatio(dpr);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // 3. Node & Synapse Data
    const nodeCount = isLowPower ? 18 : 38;
    const maxDistance = isLowPower ? 5.5 : 6.5;

    const positions = new Float32Array(nodeCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    // Distribute nodes in an organic 3D cloud
    for (let i = 0; i < nodeCount; i++) {
      const radius = 6 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = (radius * Math.sin(phi) * Math.sin(theta)) * 0.75;
      positions[i * 3 + 2] = radius * Math.cos(phi) * 0.5;

      velocities.push({
        x: (Math.random() - 0.5) * 0.008,
        y: (Math.random() - 0.5) * 0.008,
        z: (Math.random() - 0.5) * 0.006,
      });
    }

    // Node particles geometry & material (Emerald shades)
    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const nodeMaterial = new THREE.PointsMaterial({
      color: new THREE.Color("#059669"),
      size: isLowPower ? 0.35 : 0.45,
      transparent: true,
      opacity: 0.85,
      blending: THREE.NormalBlending,
    });

    const points = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(points);

    // Synaptic connections lines (Dynamic LineSegments)
    const maxConnections = (nodeCount * (nodeCount - 1)) / 2;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Subtle central energy orb (Soft glowing wireframe)
    const coreGeometry = new THREE.IcosahedronGeometry(3.5, isLowPower ? 1 : 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#10b981"),
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // 4. Mouse / Pointer Interaction with soft damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      if (!interactive || isLowPower) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 2.5;
      targetY = -y * 2.5;
    };

    if (interactive && !isLowPower) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }

    // 5. Intersection Observer to pause rendering when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && prefersReducedMotion) {
            renderer.render(scene, camera);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 6. Responsive Resize Handling
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      if (prefersReducedMotion) {
        renderer.render(scene, camera);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial render
    renderer.render(scene, camera);

    // 7. Animation Loop (Only runs if user doesn't prefer reduced motion)
    let lastTime = 0;
    const fpsInterval = isLowPower ? 1000 / 30 : 1000 / 60;

    const animate = (time: number) => {
      if (prefersReducedMotion) return;

      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsed = time - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = time - (elapsed % fpsInterval);

      // Smooth camera damping towards target mouse
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      scene.rotation.y += 0.0015;
      scene.rotation.x = mouseY * 0.2;
      scene.rotation.y += mouseX * 0.02;

      coreMesh.rotation.x += 0.002;
      coreMesh.rotation.y -= 0.003;

      // Update node positions
      const posAttr = nodeGeometry.getAttribute("position") as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      let lineVertexIndex = 0;
      let colorIndex = 0;

      for (let i = 0; i < nodeCount; i++) {
        const i3 = i * 3;
        posArray[i3] += velocities[i].x;
        posArray[i3 + 1] += velocities[i].y;
        posArray[i3 + 2] += velocities[i].z;

        // Bounce back within bounds
        const bound = 8.5;
        if (Math.abs(posArray[i3]) > bound) velocities[i].x *= -1;
        if (Math.abs(posArray[i3 + 1]) > bound * 0.75) velocities[i].y *= -1;
        if (Math.abs(posArray[i3 + 2]) > bound * 0.6) velocities[i].z *= -1;

        // Connect neighboring nodes
        for (let j = i + 1; j < nodeCount; j++) {
          const j3 = j * 3;
          const dx = posArray[i3] - posArray[j3];
          const dy = posArray[i3 + 1] - posArray[j3 + 1];
          const dz = posArray[i3 + 2] - posArray[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            const alpha = 1 - dist / maxDistance;

            linePositions[lineVertexIndex++] = posArray[i3];
            linePositions[lineVertexIndex++] = posArray[i3 + 1];
            linePositions[lineVertexIndex++] = posArray[i3 + 2];

            linePositions[lineVertexIndex++] = posArray[j3];
            linePositions[lineVertexIndex++] = posArray[j3 + 1];
            linePositions[lineVertexIndex++] = posArray[j3 + 2];

            // Color gradient from emerald to soft teal
            const r = 0.02;
            const g = 0.58 + alpha * 0.2;
            const b = 0.41 + alpha * 0.2;

            lineColors[colorIndex++] = r;
            lineColors[colorIndex++] = g;
            lineColors[colorIndex++] = b;

            lineColors[colorIndex++] = r;
            lineColors[colorIndex++] = g;
            lineColors[colorIndex++] = b;
          }
        }
      }

      posAttr.needsUpdate = true;

      lineGeometry.setDrawRange(0, lineVertexIndex / 3);
      (lineGeometry.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;
      (lineGeometry.getAttribute("color") as THREE.BufferAttribute).needsUpdate = true;

      renderer.render(scene, camera);
    };

    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(animate);
    }

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      if (interactive && !isLowPower) {
        window.removeEventListener("pointermove", handlePointerMove);
      }
      cancelAnimationFrame(animationFrameId);

      // Dispose three resources
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isLowPower, prefersReducedMotion, interactive]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}

