// pages/_app.tsx

import { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "@/styles/styles.scss";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // Dynamically import Bootstrap JavaScript only on the client-side
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
