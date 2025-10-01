import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { LandingComponent } from './pages/landing/landing';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LandingComponent, LoginComponent, RegisterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('job_opportunity_angular');
  show: 'landing' | 'login' | 'register' = 'landing';

  setView(view: 'landing' | 'login' | 'register'): void {
    this.show = view;
  }
}
