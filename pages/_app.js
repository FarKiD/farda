import Header from '../components/Header';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
