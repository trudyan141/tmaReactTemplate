import "@/styles/globals.css";
import 'antd/dist/reset.css'; // Import Ant Design's CSS
import type { AppProps } from "next/app";
import { useEffect } from "react";
import '../styles/globals.css'; // Your global styles
interface Window {
  Telegram: any;
}

export default function App({ Component, pageProps }: AppProps) {
   useEffect(() => {
    if (typeof window !== 'undefined' && window?.Telegram?.WebApp) {
      const tg = window?.Telegram.WebApp;
      console.log("🚀 ~ useEffect ~ tg:", tg)
      tg.ready();
      console.log(tg.initDataUnsafe); // You can access Telegram Web App data here
    }
  }, []);
  return <Component {...pageProps} />;
}
