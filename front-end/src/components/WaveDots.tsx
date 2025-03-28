import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { OrbitControls } from "@react-three/drei";

const WaveDots = () => {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 100 * 100; // Number of points
    const spacing = 0.3; // Space between points

    // Generate positions for wave effect
    const positions = useMemo(() => {
        const posArray = new Float32Array(count * 3);
        for (let i = 0, index = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++, index++) {
                posArray[index * 3] = i * spacing - 15; // X position
                posArray[index * 3 + 1] = 0; // Y position (wave effect applies here)
                posArray[index * 3 + 2] = j * spacing - 15; // Z position
            }
        }
        return posArray;
    }, []);

    useFrame(({ clock }) => {
        if (pointsRef.current) {
            const time = clock.getElapsedTime();
            const positionsArray = pointsRef.current.geometry.attributes
                .position.array as Float32Array;

            for (let i = 0; i < count; i++) {
                const x = positionsArray[i * 3];
                const z = positionsArray[i * 3 + 2];
                positionsArray[i * 3 + 1] =
                    Math.sin(x * 0.2 + time) * Math.cos(z * 0.2 + time) * 1.5; // Wave effect
            }

            pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={count}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.2} color="white" />
        </points>
    );
};

const Background = () => {
    return (
        <Canvas camera={{ position: [0, 5, 20] }}>
            <ambientLight />
            <WaveDots />
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};

export default Background;
