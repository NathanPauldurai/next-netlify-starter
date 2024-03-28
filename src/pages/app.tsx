import { useEffect, useState } from "react";
import type { AppProps } from 'next/app'
import Head from 'next/head'



function MyApp({ Component, pageProps }: AppProps) {


  return (
    <>
      <Head>
        <title>Hysas Employee Login</title>
        <link rel="icon" href="/pockets logo.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
