import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

export interface User {
  name?: string;
  email: string;
  password: string;
  type?: 'unemployed' | 'company';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private storageKey = 'users';

  register(user: User): Observable<User> {
    const users = this.getUsers();
    if (users.find((u: User) => u.email === user.email)) {
      return throwError(() => new Error('El correo ya está registrado.'));
    }
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
    return of(user);
  }

  login(email: string, password: string): Observable<User> {
    const users = this.getUsers();
    const user = users.find((u: User) => u.email === email && u.password === password);
    if (!user) {
      return throwError(() => new Error('Credenciales incorrectas.'));
    }
    return of(user);
  }

  private getUsers(): User[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
}
