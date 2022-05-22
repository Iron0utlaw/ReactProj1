import React from 'react'
import Header from './comp/header/Header'
import Footer from './comp/Footer/Footer'
import Man from './comp/Man/Man'
import Know from './comp/Know/Know'
import Contact from './comp/Contact/Contact'

const App = () => {
  return (
    <header>
        <Man/>
        <Header/>
        <Footer/>
        <Know/>
        <Contact/>
    </header>
  )
}

export default App