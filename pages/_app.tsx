import { Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain="dev-l-l2xrbs.us.auth0.com"
      clientId="dh3VzgHVOqYALi1os1FZBqkzOCn3s5Fl"
      redirectUri="https://ljtech-sign-in-providers.vercel.app"
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
