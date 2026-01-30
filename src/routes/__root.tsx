import '../styles.css'
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import Header from '../components/Header'
import LoadingScreen from '../components/LoadingScreen'
import { ThemeProvider } from '@/context/ThemeContext'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Portfolio | Evan Baron',
      },
    ],
    links: [
      { rel: 'icon', type: 'image/svg+xml', href: '/ebaron.svg' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Climate+Crisis&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <style
          dangerouslySetInnerHTML={{
            __html: `
          body { background-color: #1a1a1a; margin: 0; }
          .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: #1a1a1a;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.6s ease-in-out, visibility 0.6s;
          }
          .loading-screen.exit { opacity: 0; visibility: hidden; }
        `,
          }}
        />
      </head>
      <body>
        <LoadingScreen />
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <div className="p-4 space-y-2">
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="highlight-link group">
        Go back home
      </Link>
    </div>
  )
}
