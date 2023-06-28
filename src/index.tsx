import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/home/App';
import reportWebVitals from './reportWebVitals';
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryComponent from "./components/ErrorBoundaryComponent";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ErrorBoundary 
    FallbackComponent={ErrorBoundaryComponent}
    // onError={(error, info) => {
    //   console.log(error);
    //   console.log(info);
    // }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
