"use client";
import React from 'react';
import dynamic from 'next/dynamic';


// Import dinámico para evitar problemas SSR con librerías que usan window
const EcometalesVuelo = dynamic(() => import('../../components/EcometalesVuelo'), { ssr: false });


export default function GestionVuelosPage() {
return (
<main className="min-h-screen bg-gray-50 p-6">
<EcometalesVuelo />
</main>
);
}
