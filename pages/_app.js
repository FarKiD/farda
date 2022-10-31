import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </>
      
  );
}

export default MyApp
