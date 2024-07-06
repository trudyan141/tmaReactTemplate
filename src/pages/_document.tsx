import { Head, Html, Main, NextScript } from "next/document";
const Document = () => {
  return (
    <Html lang="en">
      <Head> 
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;