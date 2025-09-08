import { useState } from 'react'
import './App.css'
import { Header, Home, About, Skills, Certification, Qualification, Work, Contact, Footer, ScrollUp } from './index'

function App() {
 
  return (
    <>
      <Header />  
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Certification />
        <Qualification />
        <Contact />
      </main>   
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
