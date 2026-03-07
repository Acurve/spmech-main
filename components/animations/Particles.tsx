// "use client";

// import { useMemo, useRef, useState, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import * as THREE from "three";
// import { cn } from "@/lib/utils";

// const vertexShader = `
//   uniform float uProgress;
//   uniform float uTime;

//   attribute vec3 targetPosition;
//   attribute vec3 color;

//   varying vec3 vColor;

//   void main() {
//     vColor = color;

//     vec3 drift = vec3(
//       sin(uTime * 0.15 + position.x * 0.5) * 0.8,
//       cos(uTime * 0.12 + position.y * 0.5) * 0.8,
//       0.0 
//     );

//     vec3 scatteredPos = position + drift;
//     vec3 finalPos = mix(scatteredPos, targetPosition, uProgress);

//     vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);

//     gl_PointSize = 6.0 * (10.0 / -mvPosition.z);
//     gl_Position = projectionMatrix * mvPosition;
//   }
// `;

// const fragmentShader = `
//   varying vec3 vColor;

//   void main() {
//     float distanceToCenter = length(gl_PointCoord - vec2(0.5));
//     if (distanceToCenter > 0.5) discard;
//     gl_FragColor = vec4(vColor, 1.0);
//   }
// `;

// type Particles2DProps = {
//     imageSrc: string,
//     isUnited?: boolean
// }

// const Particles2D = ({ imageSrc, isUnited = false }: Particles2DProps) => {
//     const materialRef = useRef<THREE.ShaderMaterial>(null);
//     const [particleData, setParticleData] = useState<any>(null);

//     useEffect(() => {
//         const img = new Image();
//         img.src = imageSrc;
//         img.crossOrigin = "anonymous";
//         img.onload = () => {
//             const canvas = document.createElement("canvas");
//             const ctx = canvas.getContext("2d");
//             if (!ctx) return;

//             // --- DYNAMIC ASPECT RATIO CALCULATION ---
//             const maxSize = 200; // Maximum particles on the longest side
//             let width, height;

//             if (img.width > img.height) {
//                 width = maxSize;
//                 height = Math.floor(maxSize * (img.height / img.width));
//             } else {
//                 height = maxSize;
//                 width = Math.floor(maxSize * (img.width / img.height));
//             }

//             canvas.width = width;
//             canvas.height = height;
//             ctx.drawImage(img, 0, 0, width, height);
//             const imageData = ctx.getImageData(0, 0, width, height).data;

//             const positions = [];
//             const targetPositions = [];
//             const colors = [];

//             // Scale factor for the 3D scene (adjust '12' to make the whole thing bigger/smaller)
//             const sceneScale = 12;
//             const aspectRatio = width / height;

//             for (let y = 0; y < height; y++) {
//                 for (let x = 0; x < width; x++) {
//                     const index = (y * width + x) * 4;
//                     const r = imageData[index];
//                     const g = imageData[index + 1];
//                     const b = imageData[index + 2];
//                     const alpha = imageData[index + 3];

//                     // Ignore background (transparent or white)
//                     const isWhite = r > 245 && g > 245 && b > 245;
//                     if (alpha < 10 || isWhite) continue;

//                     // Target position respects the original image aspect ratio
//                     // We normalize x to [-0.5 * aspect, 0.5 * aspect] and y to [-0.5, 0.5]
//                     const tx = (x / width - 0.5) * sceneScale * aspectRatio;
//                     const ty = -(y / height - 0.5) * sceneScale;

//                     const sx = (Math.random() - 0.5) * 25 * aspectRatio;
//                     const sy = (Math.random() - 0.5) * 20;

//                     positions.push(sx, sy, 0);
//                     targetPositions.push(tx, ty, 0);
//                     colors.push(r / 255, g / 255, b / 255);
//                 }
//             }

//             setParticleData({
//                 positions: new Float32Array(positions),
//                 targetPositions: new Float32Array(targetPositions),
//                 colors: new Float32Array(colors),
//             });
//         };
//     }, [imageSrc]);

//     const uniforms = useMemo(() => ({
//         uProgress: { value: 0 },
//         uTime: { value: 0 },
//     }), []);

//     useFrame((state) => {
//         if (!materialRef.current) return;
//         materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

//         const target = isUnited ? 1 : 0;
//         materialRef.current.uniforms.uProgress.value += (target - materialRef.current.uniforms.uProgress.value) * 0.1;
//     });

//     if (!particleData) return null;

//     return (
//         <points>
//             <bufferGeometry>
//                 <bufferAttribute
//                     attach="attributes-position"
//                     args={[particleData.positions, 3]}
//                 />
//                 <bufferAttribute
//                     attach="attributes-targetPosition"
//                     args={[particleData.targetPositions, 3]}
//                 />
//                 <bufferAttribute
//                     attach="attributes-color"
//                     args={[particleData.colors, 3]}
//                 />
//             </bufferGeometry>
//             <shaderMaterial
//                 ref={materialRef}
//                 vertexShader={vertexShader}
//                 fragmentShader={fragmentShader}
//                 uniforms={uniforms}
//                 transparent
//             />
//         </points>
//     );
// };

// export default function ParticleImage({ imagePath,className="" }: { imagePath: string, className?:string }) {
//     const [isUnited, setIsUnited] = useState<boolean>(false)
//     return (
//         <div
//             onPointerEnter={() => setIsUnited(true)}
//             onPointerLeave={() => setIsUnited(false)}
//             className={cn("w-5xl aspect-square  bg-background",className)}>
//             <Canvas camera={{ position: [0, 0, 12] }}>
//                 <Particles2D imageSrc={imagePath} isUnited={isUnited} />
//             </Canvas>
//         </div>
//     );
// }


"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const vertexShader = `
  uniform float uProgress;
  uniform float uTime;

  attribute vec3 targetPosition;
  attribute vec3 color;
  attribute float isBackground; // Added to identify fillers

  varying vec3 vColor;

  void main() {
    vColor = color;

    vec3 drift = vec3(
      sin(uTime * 0.15 + position.x * 0.5) * 0.8,
      cos(uTime * 0.12 + position.y * 0.5) * 0.8,
      0.0 
    );

    vec3 scatteredPos = position + drift;
    vec3 finalPos;

    // Apply morphing only if it's an image particle
    if (isBackground > 0.5) {
      finalPos = scatteredPos; // Fillers stay scattered
    } else {
      finalPos = mix(scatteredPos, targetPosition, uProgress); // Image unites
    }

    vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);

    gl_PointSize = 6.0 * (10.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  varying vec3 vColor;

  void main() {
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    if (distanceToCenter > 0.5) discard;
    gl_FragColor = vec4(vColor, 1.0);
  }
`;

type Particles2DProps = {
    imageSrc: string,
    isUnited?: boolean
}

const Particles2D = ({ imageSrc, isUnited = false }: Particles2DProps) => {
    const materialRef = useRef<THREE.ShaderMaterial>(null);
    const [particleData, setParticleData] = useState<any>(null);

    useEffect(() => {
        const img = new Image();
        img.src = imageSrc;
        img.crossOrigin = "anonymous";
        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            // --- DYNAMIC ASPECT RATIO CALCULATION ---
            const maxSize = 200; // Maximum particles on the longest side
            let width, height;

            if (img.width > img.height) {
                width = maxSize;
                height = Math.floor(maxSize * (img.height / img.width));
            } else {
                height = maxSize;
                width = Math.floor(maxSize * (img.width / img.height));
            }

            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            const imageData = ctx.getImageData(0, 0, width, height).data;

            const positions = [];
            const targetPositions = [];
            const colors = [];
            const isBackground = []; // New array to store type

            // Scale factor for the 3D scene (adjust '12' to make the whole thing bigger/smaller)
            const sceneScale = 12;
            const aspectRatio = width / height;

            // 1. Generate Image Particles
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    const index = (y * width + x) * 4;
                    const r = imageData[index];
                    const g = imageData[index + 1];
                    const b = imageData[index + 2];
                    const alpha = imageData[index + 3];

                    // Ignore background (transparent or white)
                    const isWhite = r > 245 && g > 245 && b > 245;
                    if (alpha < 10 || isWhite) continue;

                    // Target position respects the original image aspect ratio
                    // We normalize x to [-0.5 * aspect, 0.5 * aspect] and y to [-0.5, 0.5]
                    const tx = (x / width - 0.5) * sceneScale * aspectRatio;
                    const ty = -(y / height - 0.5) * sceneScale;

                    const sx = (Math.random() - 0.5) * 25 * aspectRatio;
                    const sy = (Math.random() - 0.5) * 20;

                    positions.push(sx, sy, 0);
                    targetPositions.push(tx, ty, 0);
                    colors.push(r / 255, g / 255, b / 255);
                    isBackground.push(0.0); // 0.0 means it's part of the image
                }
            }

            // 2. Generate Filler Particles (The Corners/Edges)
            const fillerCount = 2000;
            for (let i = 0; i < fillerCount; i++) {
                // Scatter them over a slightly larger area than the original scatter
                const sx = (Math.random() - 0.5) * 35 * aspectRatio;
                const sy = (Math.random() - 0.5) * 30;

                // Create a "gap" in the middle so they stay in corners/edges
                // If it falls within the central area, we skip this iteration
                if (Math.abs(sx) < 12 * aspectRatio && Math.abs(sy) < 10) {
                    continue;
                }

                positions.push(sx, sy, 0);
                targetPositions.push(sx, sy, 0); // Irrelevant, shader ignores it
                colors.push(0, 0, 0); // Black fillers
                isBackground.push(1.0); // 1.0 means it's a filler
            }

            setParticleData({
                positions: new Float32Array(positions),
                targetPositions: new Float32Array(targetPositions),
                colors: new Float32Array(colors),
                isBackground: new Float32Array(isBackground),
            });
        };
    }, [imageSrc]);

    const uniforms = useMemo(() => ({
        uProgress: { value: 0 },
        uTime: { value: 0 },
    }), []);

    useFrame((state) => {
        if (!materialRef.current) return;
        materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

        const target = isUnited ? 1 : 0;
        materialRef.current.uniforms.uProgress.value += (target - materialRef.current.uniforms.uProgress.value) * 0.1;
    });

    if (!particleData) return null;

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particleData.positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-targetPosition"
                    args={[particleData.targetPositions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[particleData.colors, 3]}
                />
                <bufferAttribute
                    attach="attributes-isBackground"
                    args={[particleData.isBackground, 1]}
                />
            </bufferGeometry>
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent
            />
        </points>
    );
};

// Exported as App to satisfy the preview environment, 
// using a fallback Google logo if no imagePath is provided.
export default function App({
    imagePath = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_Color_Logo.svg/1200px-Google_Color_Logo.svg.png",
    className = "",
    isUnited = false,
    setIsUnited
}: {
    imagePath?: string,
    className?: string,
    isUnited: boolean,
    setIsUnited: (isUnited: boolean) => void
}) {

    return (
        <div
            onPointerEnter={() => setIsUnited(true)}
            onPointerLeave={() => setIsUnited(false)}
            className={cn("aspect-square w-full", className)}>
            <Canvas camera={{ position: [0, 0, 15] }}>
                <Particles2D imageSrc={imagePath} isUnited={isUnited} />
            </Canvas>
        </div>
    );
}