export class AuthService {
    private readonly validUser = { username: 'user', password: 'password' };
  
    login(username: string, password: string): boolean {
      return username === this.validUser.username && password === this.validUser.password;
    }
  }