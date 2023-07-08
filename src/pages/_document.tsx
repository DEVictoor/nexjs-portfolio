import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "../theme/theme";
import { useRouter } from "next/router";
import { Enlaces } from "@/data/links";

export default function Document() {
  // const { pathname } = useRouter();

  // const enlaceFound = Enlaces.find((e) => e.link == pathname);

  return (
    <Html lang="es">
      <Head>
        <title>Gaa</title>
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
