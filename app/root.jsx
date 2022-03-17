import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from 'remix'

// import styles from '~/styles/global.css'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import amplifyStyles from '@aws-amplify/ui-react/styles.css' // default theme

import { Amplify } from 'aws-amplify'
// import awsExports from '../src/aws-exports'

Amplify.configure({ ssr: true })

export function links () {
  return [{ rel: 'stylesheet', href: amplifyStyles }]
}

export function meta () {
  return { title: 'New Remix App' }
}

export default function App () {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <AmplifyProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </AmplifyProvider>
      </body>
    </html>
  )
}
