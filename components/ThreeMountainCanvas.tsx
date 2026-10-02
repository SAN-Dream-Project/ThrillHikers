'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeMountainCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    let animationFrameId: number;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05130e, 0.025);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 4.5, 9);
    camera.lookAt(0, 1.2, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Mountain Terrain Geometry
    const terrainWidth = 32;
    const terrainHeight = 24;
    const segX = 70;
    const segY = 55;
    const terrainGeometry = new THREE.PlaneGeometry(terrainWidth, terrainHeight, segX, segY);
    terrainGeometry.rotateX(-Math.PI / 2);

    // Displace vertices to create Himalayan mountain ridges
    const pos = terrainGeometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);

      // Procedural mountain elevation with noise-like math
      const d = Math.sqrt(x * x + z * z);
      const ridge1 = Math.sin(x * 0.45 + 1.2) * Math.cos(z * 0.35) * 2.2;
      const ridge2 = Math.sin(x * 0.9 - 0.4) * Math.sin(z * 0.8) * 1.1;
      const peak = Math.exp(-d * 0.08) * (Math.sin(x * 0.6) * 2.0 + Math.cos(z * 0.5) * 1.5);
      const microDetail = Math.sin(x * 2.5) * Math.cos(z * 2.5) * 0.25;

      const y = Math.max(0, ridge1 + ridge2 + peak + microDetail);
      pos.setY(i, y);
    }
    terrainGeometry.computeVertexNormals();

    // Solid Mountain Surface Material
    const surfaceMaterial = new THREE.MeshStandardMaterial({
      color: 0x07281a,
      roughness: 0.85,
      metalness: 0.2,
      flatShading: true,
      wireframe: false,
    });
    const mountainMesh = new THREE.Mesh(terrainGeometry, surfaceMaterial);
    mountainMesh.position.set(0, -0.6, -1);
    scene.add(mountainMesh);

    // Wireframe Overlay for High-Tech / Topographical Elevation Lines
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const wireframeMesh = new THREE.Mesh(terrainGeometry, wireframeMaterial);
    wireframeMesh.position.set(0, -0.58, -1);
    scene.add(wireframeMesh);

    // Floating Ambient Particles (Embers & Alpine Stardust)
    const particleCount = 220;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 26;
      particlePositions[i * 3 + 1] = Math.random() * 8 + 0.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 18;
      particleSpeeds[i] = 0.005 + Math.random() * 0.012;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x6ee7b7,
      size: 0.12,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0a3322, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfde68a, 2.2);
    sunLight.position.set(12, 16, 6);
    scene.add(sunLight);

    const rimLight = new THREE.PointLight(0x10b981, 3.5, 30);
    rimLight.position.set(-8, 6, 2);
    scene.add(rimLight);

    // Interactive Mouse Tracking with Smooth Lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = (event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation
      targetX += (mouseX * 0.8 - targetX) * 0.04;
      targetY += (mouseY * 0.4 - targetY) * 0.04;

      camera.position.x = targetX * 1.5;
      camera.position.y = 4.5 - targetY * 0.8;
      camera.lookAt(0, 1.2 + targetY * 0.3, 0);

      // Subtle mountain breathing/oscillation
      mountainMesh.rotation.y = Math.sin(elapsedTime * 0.15) * 0.02;
      wireframeMesh.rotation.y = mountainMesh.rotation.y;

      // Animate drifting particles
      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleSpeeds[i];
        // Wrap around when rising too high
        if (positions[i * 3 + 1] > 8.5) {
          positions[i * 3 + 1] = 0.2;
        }
        // Slight horizontal sway
        positions[i * 3] += Math.sin(elapsedTime + i) * 0.003;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      terrainGeometry.dispose();
      surfaceMaterial.dispose();
      wireframeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}

