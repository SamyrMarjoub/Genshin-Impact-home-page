import React, { Component } from 'react'
import Header from './components/pages/header'
import Footer from './components/pages/footer'
import Main from './components/pages/main'
import './components/styles/header.css'

class App extends Component {

  render() {
    return (
      <div className='main'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}


export default App;
