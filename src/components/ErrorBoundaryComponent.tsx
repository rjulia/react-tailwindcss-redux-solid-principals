import React from 'react'
import  {
  FallbackProps
} from 'react-error-boundary'

function ErrorBoundaryComponent(props: FallbackProps) {
  const { error, resetErrorBoundary } = props

  return (
    <div>
      <h1>Something went wrong</h1>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default ErrorBoundaryComponent