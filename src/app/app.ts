import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { LandingComponent } from './pages/landing/landing';
import { HomeComponent } from './pages/home/home';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('job_opportunity_angular');
  show: 'landing' | 'login' | 'register' | 'home' = 'landing';

  setView(view: 'landing' | 'login' | 'register' | 'home'): void {
    this.show = view;
  }
}
