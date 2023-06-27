import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath;

  return (
    <ChakraProvider>
      <AnimatePresence mode="wait">
        <Component key={pageKey} {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}
