import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const MyMap = () => {
  const [cookieValue, setCookieValue] = useState('');

  useEffect(() => {
    Cookies.set('cookieName', 'cookieValue', { sameSite: 'none',  secure: true });
    setCookieValue('')
      // Очищаем поле ввода
  }, [])
  return (
    <div style={{width: "100%", height: "100%"}}>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1b_Vh2gSAg-ZLg3sZ_w1YtcUvj_UvU-4&hl=ru&ehbc=2E312F"
        width="100%"
        height="100%"
        frameBorder="1"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default MyMap;
