import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  showPassword = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      type: ['', Validators.required]
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  selectType(type: string): void {
    this.registerForm.get('type')?.setValue(type);
  }

  onSubmit(): void {
    this.successMessage = '';
    this.errorMessage = '';
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      this.auth.register(user).subscribe({
        next: () => {
          this.successMessage = 'Registro exitoso. Redirigiendo a iniciar sesión...';
          // navegar a login tras pequeño delay para que el usuario vea el mensaje
          setTimeout(() => this.router.navigate(['/login']), 800);
        },
        error: (err: any) => {
          this.errorMessage = err?.message || 'Error al registrar usuario.';
        }
      });
    } else {
      this.errorMessage = 'Por favor completa todos los campos correctamente.';
      this.registerForm.markAllAsTouched();
    }
  }
}
