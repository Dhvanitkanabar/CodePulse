export const authService = {
    login: async (email, password) => { return { token: 'jwt-token-123' }; },
    register: async (data) => { return { success: true }; },
    verifyToken: (token) => { return true; }
};
