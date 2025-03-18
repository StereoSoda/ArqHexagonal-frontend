import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { AuthAdapter } from './adapters/auth.adapter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  providers: [AuthAdapter]
})

export class AppComponent {
}
