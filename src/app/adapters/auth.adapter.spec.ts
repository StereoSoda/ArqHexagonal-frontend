import { AuthAdapter } from './auth.adapter';

describe('AuthAdapter', () => {
  let authAdapter: AuthAdapter;

  beforeEach(() => {
    authAdapter = new AuthAdapter();
  });

  it('should return true for valid credentials', () => {
    const result = authAdapter.login('user', 'password');
    expect(result).toBeTrue();
  });

  it('should return false for invalid credentials', () => {
    const result = authAdapter.login('wronguser', 'wrongpassword');
    expect(result).toBeFalse();
  });
});