import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import * as api from '../services/api';
import { load, save } from '../utils/storage';

const AuthContext = createContext(null);
const KEY = 'drip-store:auth';

/** Sessão do usuário: token JWT + dados públicos, persistidos no navegador. */
export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => load(KEY, null));

  // descarta sessão com token expirado
  useEffect(() => {
    const exp = session && api.decodeToken(session.token)?.exp;
    if (exp && exp * 1000 < Date.now()) setSession(null);
  }, [session]);

  useEffect(() => save(KEY, session), [session]);

  const login = useCallback(async (email, password) => {
    const result = await api.login(email, password);
    setSession(result);
    return result.user;
  }, []);

  const register = useCallback(
    async (data) => {
      await api.register(data);
      return login(data.email, data.password);
    },
    [login]
  );

  const logout = useCallback(() => setSession(null), []);

  const value = useMemo(
    () => ({ user: session?.user || null, token: session?.token || null, login, register, logout }),
    [session, login, register, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
