import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

const Error = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }, [router])

  return (
    <>
      <Head>
        <title>Ошибка</title>
      </Head>
      <div className="error">
        <div>
          <h1>404</h1>
          <p>Страница недоступна!!!</p>
        </div>
      </div>
    </>
  );
};

export default Error;