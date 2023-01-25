import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextCustomPage } from "../types/next";
import EmptyLayout from "../components/EmptyLayout";

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextCustomPage }) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
