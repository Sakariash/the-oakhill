import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <title>The Oakhill - Design & Solutions</title>
        <link rel="icon" href="/Favicon.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700;900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;700&family=Montserrat:ital,wght@0,100;0,200;0,400;0,700;1,100;1,200;1,400;1,700&display=swap" rel="stylesheet"/>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-54DPZ4MZ');
        `}} />
        {/* End Google Tag Manager */}
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="63ee30ba-792d-4927-a331-12bd819a28e4" data-blockingmode="auto" type="text/javascript"></script>
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-54DPZ4MZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
