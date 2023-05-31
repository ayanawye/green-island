import Layout from '@/components/Layout';
import '@/styles/globals.scss';
import '../styles/Header.css';
import '../styles/Error.scss';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}