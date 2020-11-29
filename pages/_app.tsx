import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'

const queryCache = new QueryCache()

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Component {...pageProps} />
      </ReactQueryCacheProvider>
    </ChakraProvider>
  )
}
export default MyApp
