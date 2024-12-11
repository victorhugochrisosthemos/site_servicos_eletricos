import React from 'react';

export function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80"
          alt="Eletricista trabalhando"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Serviços Elétricos Profissionais
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Soluções elétricas seguras e confiáveis para sua residência. 
          Atendimento 24/7 com profissionais qualificados e certificados.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-500 hover:bg-yellow-400"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </div>
  );
}