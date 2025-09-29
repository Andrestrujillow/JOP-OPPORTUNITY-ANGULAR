import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';

@Component({
  selector: 'app-root',
  standalone: true,
  // Import LoginComponent and RegisterComponent so we can render them in the root template
  imports: [CommonModule, LoginComponent, RegisterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('job_opportunity_angular');
  show: 'login' | 'register' = 'login';
}
