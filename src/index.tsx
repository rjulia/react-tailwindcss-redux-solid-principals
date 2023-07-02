/* eslint-disable no-use-before-define */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ErrorBoundary } from 'react-error-boundary'
import App from './App.tsx'
import reportWebVitals from './reportWebVitals.ts'
import ErrorBoundaryComponent from './components/ErrorBoundaryComponent/ErrorBoundaryComponent.tsx'
import '@fontsource/open-sans'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/800.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)
root.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorBoundaryComponent}
    // onError={(error, info) => {
    //   console.log(error);
    //   console.log(info);
    // }}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
