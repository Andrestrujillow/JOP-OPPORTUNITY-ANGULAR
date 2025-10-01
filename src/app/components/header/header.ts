import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type HeaderView = 'landing' | 'home' | 'login' | 'register';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  @Input() activeView: HeaderView = 'landing';
  @Output() navigate = new EventEmitter<HeaderView>();

  protected readonly navItems: ReadonlyArray<{
    label: string;
    view: HeaderView;
    cta?: boolean;
  }> = [
    { label: 'Inicio', view: 'landing' },
    { label: 'Oportunidades', view: 'home' },
    { label: 'Ingresar', view: 'login' },
    { label: 'Crear cuenta', view: 'register', cta: true }
  ];

  protected isActive(view: HeaderView): boolean {
    return this.activeView === view;
  }

  protected onNavigate(view: HeaderView): void {
    this.navigate.emit(view);
  }
}
