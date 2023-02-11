import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { StyleRegistry, useStyleRegistry } from "styled-jsx";

const Styles = () => {
  const registry = useStyleRegistry();
  const styles = registry.styles();
  registry.flush();

  return <>{styles}</>;
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <StyleRegistry>
          <Head>
            <Styles />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </StyleRegistry>
      </Html>
    );
  }
}

export default MyDocument;
