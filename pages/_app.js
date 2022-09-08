import "../styles/globals.scss";
import * as React from "react";
//for react-pdf
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { FormspreeProvider } from "@formspree/react";

function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project="{your-project-id}">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}

export default MyApp;
