import { useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    // Set the renderer size to fill the entire viewport
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1); // Set background color to black

    // Append renderer to a container instead of the body
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.zIndex = '-1'; // Behind all components
    document.body.appendChild(container);
    container.appendChild(renderer.domElement);

    // Create a geometry and material for the particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = []; // Array to hold color values

    // Generate random vertices and colors for the particles
    for (let i = 0; i < 100; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      vertices.push(x, y, z);

      // Generate random colors (RGB)
      colors.push(Math.random(), Math.random(), Math.random()); // Random color for each particle
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3)); // Add colors to geometry

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true, // Enable vertex colors
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 5;

    // Mouse movement effect
    const mouse = new THREE.Vector2();
    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update particles based on mouse position
      particles.rotation.x = mouse.y * Math.PI; // Rotate up and down based on mouse Y
      particles.rotation.y = mouse.x * Math.PI; // Rotate left and right based on mouse X
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Update renderer size on window resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      document.body.removeChild(container);
    };
  }, []);

  return null; // No need to render anything from this component
};

export default ThreeScene;
