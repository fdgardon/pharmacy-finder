import React from "react"
// import ReactDOM from "react-dom"
import App from './App'
// import Header from "./components/common/Header"
// import Home from "./components/home/Home"
// import ErrorBoundary from "./components/common/ErrorBoundary"

import "./css/index.css"

// const App = () => (
//   <ErrorBoundary>
//     <Header />
//     <Home />
//   </ErrorBoundary>
// )

// ReactDOM.render(<App />, document.getElementById("root"))

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App tab="root" />);