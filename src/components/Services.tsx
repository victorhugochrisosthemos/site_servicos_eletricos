import React from 'react';
import { Lightbulb, Shield, Wrench, Home, Activity, Power } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Instalação',
    description: 'Instalação completa e segura para novos ambientes',
  },
  {
    icon: Shield,
    title: 'Manutenção Preventiva',
    description: 'Evite problemas futuros com manutenção regular',
  },
  {
    icon: Wrench,
    title: 'Reparos',
    description: 'Correção rápida de problemas elétricos',
  },
  {
    icon: Home,
    title: 'Projetos Residenciais',
    description: 'Projetos elétricos completos para sua casa',
  },
  {
    icon: Activity,
    title: 'Diagnóstico',
    description: 'Identificação precisa de problemas elétricos',
  },
  {
    icon: Power,
    title: 'Quadros Elétricos',
    description: 'Instalação e manutenção de quadros de distribuição',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Oferecemos uma ampla gama de serviços elétricos para sua residência
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-yellow-500 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-yellow-50 text-yellow-500 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}