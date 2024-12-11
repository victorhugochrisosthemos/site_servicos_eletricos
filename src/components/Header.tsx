import React from 'react';
import { Zap } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-yellow-500" />
            <span className="text-2xl font-bold text-gray-900">ElectroServ</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-yellow-500">Serviços</a>
            <a href="#about" className="text-gray-700 hover:text-yellow-500">Sobre</a>
            <a href="#contact" className="text-gray-700 hover:text-yellow-500">Contato</a>
          </nav>
        </div>
      </div>
    </header>
  );
}