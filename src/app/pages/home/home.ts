import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type CategoryCard = {
  icon: 'jobs' | 'classifieds' | 'training';
  title: string;
  description: string;
  cta: string;
  target: string;
};

type StatCard = {
  value: string;
  label: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  protected readonly categories: CategoryCard[] = [
    {
      icon: 'jobs',
      title: 'Bolsa de empleos',
      description:
        'Vacantes curadas para los perfiles de Popayán y el suroccidente colombiano, listas para postularte con un clic.',
      cta: 'Ver empleos',
      target: 'categories'
    },
    {
      icon: 'classifieds',
      title: 'Servicios profesionales',
      description:
        'Espacios para que freelancers y micronegocios publiquen sus ofertas con respaldo de Job Opportunity.',
      cta: 'Explorar servicios',
      target: 'categories'
    },
    {
      icon: 'training',
      title: 'Rutas de capacitación',
      description:
        'Programas de formación y certificaciones que fortalecen las habilidades más requeridas por las empresas aliadas.',
      cta: 'Ver capacitaciones',
      target: 'cta'
    }
  ];

  protected readonly stats: StatCard[] = [
    { value: '8K+', label: 'Personas activas en Job Opportunity' },
    { value: '1.5K+', label: 'Vacantes conectadas con talento local' },
    { value: '92%', label: 'Postulaciones con seguimiento exitoso' },
    { value: '40+', label: 'Aliados entre empresas y entidades' }
  ];

  onScrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
