import { useRef } from "react";
import { useEffect } from "react";
import React from "react";

export default function ParticlesBackground(){
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let particles = [];
        const particleCount = 50;
        const colors = ["rgba(255,255,255,0.7)"]

        class Particle{
            constructor(){
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random()* 2+1;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedy = (Math.random() - 0.5) * 0.5;

            }
        }
    })
    return(
        <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
            
        </canvas>
    )
}