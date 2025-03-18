import { AuthPort } from '../domain/ports/auth.port';
import { AuthService } from '../domain/auth.service';

export class AuthAdapter implements AuthPort {
  private authService = new AuthService();

  login(username: string, password: string): boolean {
    return this.authService.login(username, password);
  }
}