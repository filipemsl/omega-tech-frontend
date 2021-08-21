import { useState, useEffect } from 'react';

import { api } from '../services/api'
import history from '../history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');

    if (access_token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(access_token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(e) {
    const { data: { access_token } } = await api.post('/auth/login', e);

    localStorage.setItem('access_token', JSON.stringify(access_token));
    api.defaults.headers.Authorization = `Bearer ${access_token}`;
    setAuthenticated(true);
    history.push('/dashboard');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('access_token');
    api.defaults.headers.Authorization = undefined;
    history.push('/');
  }

  return { authenticated, loading, handleLogin, handleLogout };
}