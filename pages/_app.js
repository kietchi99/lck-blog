import '../styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material'
import { theme } from 'components/themes/theme'
import NextNProgress from 'nextjs-progressbar'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps, session }) {
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress color="#2667ff" />
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp
