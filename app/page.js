'use client'
import Head from 'next/head';
import Image from 'next/image'
import { useEffect } from 'react';

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <div
        id="install-banner"
        className="fixed bottom-0 left-0 w-full bg-blue-500 text-white p-2 text-center cursor-pointer"
        style={{ display: 'none' }}
      >
        Instalar la aplicación
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.js</code>
        </p>
      </div>
    </main>
  )
}
