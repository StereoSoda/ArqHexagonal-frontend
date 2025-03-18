import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthAdapter } from '../../adapters/auth.adapter';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authAdapter: jasmine.SpyObj<AuthAdapter>;

  beforeEach(async () => {
    authAdapter = jasmine.createSpyObj('AuthAdapter', ['login']);

    await TestBed.configureTestingModule({
      imports: [FormsModule, LoginComponent],
      providers: [
        { provide: AuthAdapter, useValue: authAdapter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display success message on valid login', () => {
    
    authAdapter.login.and.returnValue(true);

    component.username = 'user';
    component.password = 'password';
    component.onLogin();

    expect(component.message).toBe('Login successful!');
  });

  it('should display error message on invalid login', () => {
    
    authAdapter.login.and.returnValue(false);

    component.username = 'wronguser';
    component.password = 'wrongpassword';
    component.onLogin();

    expect(component.message).toBe('Invalid credentials');
  });
});