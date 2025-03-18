import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthAdapter } from '../../adapters/auth.adapter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hex-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    FormsModule,
    CommonModule
  ],
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';

  constructor(private authAdapter: AuthAdapter) {}

  onLogin(): void {
    if (this.authAdapter.login(this.username, this.password)) {
      this.message = 'Login successful!';
    } else {
      this.message = 'Invalid credentials';
    }
  }
}