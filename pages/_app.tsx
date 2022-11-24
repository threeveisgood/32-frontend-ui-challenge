import "../styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { queryClient } from "../lib/query-client";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import store from "../lib/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
