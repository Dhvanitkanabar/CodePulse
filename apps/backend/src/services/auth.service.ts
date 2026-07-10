// ========================
// Auth Service Stub
// ========================

export class AuthService {
  async register(_email: string, _password: string, _name: string) {
    // TODO: implement user registration
    throw new Error('Not implemented');
  }

  async login(_email: string, _password: string) {
    // TODO: implement login
    throw new Error('Not implemented');
  }

  async verifyToken(_token: string) {
    // TODO: implement token verification
    throw new Error('Not implemented');
  }
}

export const authService = new AuthService();
