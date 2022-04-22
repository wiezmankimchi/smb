import { AuthProvider } from '@redwoodjs/auth'
import { initializeApp, getApp, getApps } from 'firebase/app'
import * as firebaseAuth from '@firebase/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import AllContextProviders from './providers/context'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

// const firebaseConfig = {
//   apiKey: 'AIzaSyB9iZLk-HKOVSrDjUfKT0Lp5aFWj7QqHiw',
//   authDomain: 'wikimchi-bdc69.firebaseapp.com',
//   projectId: 'wikimchi-bdc69',
//   storageBucket: 'wikimchi-bdc69.appspot.com',
//   messagingSenderId: '195760686263',
//   appId: '1:195760686263:web:f30888aa30cf76c5203932',
//   measurementId: 'G-0F0XFKQNJL',
// }

const firebaseApp = ((config) => {
  const apps = getApps()
  if (!apps.length) {
    initializeApp(config)
  }
  return getApp()
})(firebaseConfig)

export const firebaseClient = {
  firebaseAuth,
  firebaseApp, // optional
}

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider client={firebaseClient} type="firebase">
        <RedwoodApolloProvider>
          <AllContextProviders>
            <Routes />
          </AllContextProviders>
        </RedwoodApolloProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
