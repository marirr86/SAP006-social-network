import { Login } from './login-index.js';
import { loginTags } from './login.js';

describe('Login', () => {
  it('should be a function', () => {
    expect(typeof Login).toBe('function');
  });
});

describe('loginTags', () => {
  it('should be a function', () => {
    expect(typeof loginTags).toBe('function');
  });
  it('Deve conter uma estrutura html, respondendo como string', () => {
    const newLoginHtml = loginTags();
    expect(typeof newLoginHtml === 'string').toBe(true);
  });
});
