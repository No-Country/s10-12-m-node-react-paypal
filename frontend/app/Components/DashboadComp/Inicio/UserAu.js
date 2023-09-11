'use client'
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/app/context/auth-context';


export function useCompDashboardInicioState() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    // Verifica si el usuario está autenticado  
    console.log(authContext.user)
    console.log('esta aut', authContext.isUserAuthenticated());
    setIsUserAuthenticated(authContext.isUserAuthenticated());
    setText(isUserAuthenticated ? `Hola, ${user.lastName}` : '');

    if (!authContext.isUserAuthenticated()) {
      router.push('/LoginPage');
    }
  }, [authContext, isUserAuthenticated, user, router]);

  return { isUserAuthenticated, text };
}