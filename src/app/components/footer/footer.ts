import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly quickLinks = [
    { label: 'Oportunidades', icon: '💼' },
    { label: 'Empresas', icon: '🏢' },
    { label: 'Servicios', icon: '🛠️' },
    { label: 'Formación', icon: '🎓' }
  ];

  protected readonly supportLinks = [
    { label: 'Centro de ayuda' },
    { label: 'Preguntas frecuentes' },
    { label: 'Términos y condiciones' },
    { label: 'Política de privacidad' }
  ];
}
