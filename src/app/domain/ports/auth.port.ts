export interface AuthPort {
    login(username: string, password: string): boolean;
}