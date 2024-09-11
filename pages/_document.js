import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Webbyrå The Oakhill - Hemsidor till bra pris</title>
        <link rel="icon" href="/Favicon.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700;900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;700&family=Montserrat:ital,wght@0,100;0,200;0,400;0,700;1,100;1,200;1,400;1,700&display=swap" rel="stylesheet"/>
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="63ee30ba-792d-4927-a331-12bd819a28e4" data-blockingmode="auto" type="text/javascript"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
