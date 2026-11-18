import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { useAuth } from '../context/AuthContext';
import './auth.css';

/**
 * Telas "Entrar" e "Cadastre-se" (mode = login | signup).
 * Usam a API do back-end: POST /v1/user/token e POST /v1/user.
 */
export default function AuthPage({ mode }) {
  const isLogin = mode === 'login';
  const { user, login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || '/';

  const [form, setForm] = useState({ firstname: '', surname: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  if (user) return <Navigate to={redirectTo} replace />;

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!isLogin && form.password !== form.confirmPassword) {
      setError({ message: 'As senhas não conferem.' });
      return;
    }

    setLoading(true);
    try {
      if (isLogin) await login(form.email, form.password);
      else await register(form);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError({ message: err.message, details: err.details });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="auth">
        <div className="container auth__inner">
          <form className="auth__card" onSubmit={handleSubmit} noValidate={false}>
            <h1>{isLogin ? 'Acesse sua conta' : 'Crie sua conta'}</h1>
            <p className="auth__switch">
              {isLogin ? (
                <>
                  Novo cliente? Então registre-se <Link to="/cadastro" state={location.state}>aqui</Link>.
                </>
              ) : (
                <>
                  Já possui uma conta? Entre <Link to="/login" state={location.state}>aqui</Link>.
                </>
              )}
            </p>

            {!isLogin && (
              <div className="auth__row">
                <label className="auth__field">
                  <span>Nome *</span>
                  <input required value={form.firstname} onChange={update('firstname')} placeholder="Insira seu nome" autoComplete="given-name" />
                </label>
                <label className="auth__field">
                  <span>Sobrenome *</span>
                  <input required value={form.surname} onChange={update('surname')} placeholder="Insira seu sobrenome" autoComplete="family-name" />
                </label>
              </div>
            )}

            <label className="auth__field">
              <span>Email *</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={update('email')}
                placeholder="Insira seu email"
                autoComplete="email"
              />
            </label>

            <label className="auth__field">
              <span>Senha *</span>
              <input
                required
                type="password"
                minLength={isLogin ? undefined : 6}
                value={form.password}
                onChange={update('password')}
                placeholder="Insira sua senha"
                autoComplete={isLogin ? 'current-password' : 'new-password'}
              />
            </label>

            {!isLogin && (
              <label className="auth__field">
                <span>Confirmar senha *</span>
                <input
                  required
                  type="password"
                  minLength={6}
                  value={form.confirmPassword}
                  onChange={update('confirmPassword')}
                  placeholder="Repita sua senha"
                  autoComplete="new-password"
                />
              </label>
            )}

            {error && (
              <div className="auth__error" role="alert">
                <strong>{error.message}</strong>
                {error.details?.length > 0 && (
                  <ul>
                    {error.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <button type="submit" className="auth__submit" disabled={loading}>
              {loading ? 'Aguarde...' : isLogin ? 'Acessar Conta' : 'Criar Conta'}
            </button>

            {isLogin && (
              <p className="auth__hint">
                Conta de demonstração: <code>admin@dripstore.com</code> / <code>123456</code>
              </p>
            )}
          </form>

          <div className="auth__art" aria-hidden="true">
            <img src="/produc-image-5.jpeg" alt="" className="auth__shoe auth__shoe--back" />
            <img src="/produc-image-1.jpeg" alt="" className="auth__shoe auth__shoe--front" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
