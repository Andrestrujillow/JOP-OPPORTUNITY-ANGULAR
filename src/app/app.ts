import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginComponent, RegisterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('job_opportunity_angular');
  show: 'login' | 'register' = 'login';
}
