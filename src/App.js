import React from 'react'

import { Blog, Features, Footer, Force, Header, Possibility} from "./containers";
import { CTA, Navbar, Laser} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Laser />
      <Force />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
