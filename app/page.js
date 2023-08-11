'use client'
import Head from 'next/head';
import Image from 'next/image'
import Landing from './components/Landing';
import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/provider';


export default function Home() {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');

      window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        const installBanner = document.getElementById('install-banner');

        installBanner.style.display = 'block';

        installBanner.addEventListener('click', () => {
          event.prompt();
          event.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('El usuario aceptó instalar la PWA');
            } else {
              console.log('El usuario rechazó la instalación de la PWA');
            }
          });
        });
      });
    }
  }, []);

  return (
    <ChakraProvider>
      <main>
        <Head>
          <meta name="apple-mobile-web-app-capable" content="yes" />
        </Head>
        <div
          id="install-banner"
          className="fixed bottom-0 left-0 w-full bg-blue-500 text-white p-2 text-center cursor-pointer"
          style={{
            display: 'none',
            // Ajusta los estilos según tus preferencias
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '10px',
            textAlign: 'center',
            cursor: 'pointer',
            zIndex: '1000',
          }}
        >
          Instalar la aplicación
        </div>
        <Landing />
      </main>
    </ChakraProvider>
  )
}
