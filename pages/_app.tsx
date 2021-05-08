import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { useApollo } from '../libs/apollo/client';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: '윤고딕310';
    src: url('/fonts/윤고딕310.ttf');
  }
  @font-face {
    font-family: '윤고딕320';
    src: url('/fonts/윤고딕320.ttf');
  }
  @font-face {
    font-family: '윤고딕330';
    src: url('/fonts/윤고딕330.ttf');
  }
  @font-face {
    font-family: '윤고딕340';
    src: url('/fonts/윤고딕340.ttf');
  }
  @font-face {
    font-family: '윤고딕350';
    src: url('/fonts/윤고딕350.ttf');
  }
`;

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <Head>
        <title>The Y 컨설팅 - The Why Consulting</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default App;
