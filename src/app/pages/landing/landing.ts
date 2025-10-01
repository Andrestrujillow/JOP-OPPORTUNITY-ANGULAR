import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class LandingComponent {
  @Output() readonly switchView = new EventEmitter<'login' | 'register' | 'home'>();

  protected readonly highlights = [
    {
      title: 'Conexión territorial',
      description:
        'Acompañamos a Popayán con una plataforma que une a quienes buscan empleo con organizaciones que apuestan por el talento local.',
      icon: 'map'
    },
    {
      title: 'Camino formativo',
      description:
        'Integramos recursos y capacitaciones para fortalecer habilidades y abrir puertas a nuevas oportunidades.',
      icon: 'compass'
    },
    {
      title: 'Visión empresarial',
      description:
        'Ofrecemos analítica y seguimiento para que las empresas seleccionen perfiles con información confiable y actualizada.',
      icon: 'insight'
    }
  ];

  protected readonly objectives = [
    'Conectar a personas cesantes con vacantes que se ajusten a sus habilidades y metas profesionales.',
    'Brindar formación continua y recomendaciones personalizadas que impulsen la empleabilidad.',
    'Apoyar a empresas y microempresas con herramientas de selección, métricas y comunicación directa.'
  ];

  protected readonly enablers = [
    'Arquitectura basada en microservicios escalables y resilientes para crecer sin fricciones.',
    'Filtros avanzados, coincidencias inteligentes y chat en tiempo real para acelerar las postulaciones.',
    'Experiencias seguras y responsivas, disponibles 24/7 en cualquier dispositivo.'
  ];

  protected readonly impacts = [
    {
      quote:
        'Popayán necesitaba una plataforma que escuchara sus realidades laborales y potenciara el talento local.',
      author: 'Equipo de Diseño Job Opportunity'
    },
    {
      quote:
        'Cada módulo se pensó para crear un ecosistema accesible, justo y listo para escalar a nivel nacional.',
      author: 'Equipo de Producto Job Opportunity'
    }
  ];

  onGetStarted(): void {
    this.switchView.emit('register');
  }

  onExplore(): void {
    this.switchView.emit('home');
  }

  onSignIn(): void {
    this.switchView.emit('login');
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
