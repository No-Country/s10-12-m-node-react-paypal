'use client'
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/app/context/auth-context';
import CrearCuenta from '../api/CrearAccount';


export function useCompDashboardInicioState() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    setIsUserAuthenticated(authContext.isUserAuthenticated());
    setText(isUserAuthenticated ? `Hola, ${user.lastName}` : '');

    if (!authContext.isUserAuthenticated()) {
      router.push('/LoginPage');
    }
  }, [authContext, isUserAuthenticated, user, router]);

  return { isUserAuthenticated, text };
}