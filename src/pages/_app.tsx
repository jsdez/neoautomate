// pages/_app.tsx

import { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "@/styles/styles.scss";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
