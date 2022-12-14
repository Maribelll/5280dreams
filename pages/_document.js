import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/wyk5lvq.css" />

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="5280 Dream Properties" />
          <meta
            property="og:title"
            content="5280 Dream Properties: Land for Sale, Home for Lease, RV Rental"
          />
          <meta
            property="og:description"
            content="Find a place to call home. Home by the beach, land in the country or tour the US in an RV."
          />
          <meta property="og:url" content="https://5280dreamproperties.com" />
          <meta property="og:locale" content="en_EN" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662635499/rent/meta5280_dxzpek.jpg"
          />
          <meta property="og:image:alt" content="5280 Dream Properties" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="627" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
