import { Stack } from '@chakra-ui/react'
import Head from 'next/head'
import { Navigation } from './Navigation'
import { Footer } from './Footer'

export function Layout({ children }): JSX.Element {
  return (
    <Stack spacing={0} color="gray.900" fontFamily="Josefin Sans" pt="24" id="home">
      <Head>
        <title>Nextjs ecommerce demo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Navigation />
      <Stack as="main" spacing={0}>
        {children}
      </Stack>
      <Footer />
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </Stack>
  )
}
