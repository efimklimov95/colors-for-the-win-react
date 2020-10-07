import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
 
import './App.css'

const items = [
  {
    id: 1,
    before: require( '../img/01_before.jpg' ),
    after: require( '../img/01_after.jpg' )
  },
  {
    id: 2,
    before: require( '../img/02_before.jpg' ),
    after: require( '../img/02_after.jpg' )
  },
  {
    id: 3,
    before: require( '../img/03_before.jpg' ),
    after: require( '../img/03_after.jpg' )
  },
  {
    id: 4,
    before: require( '../img/04_before.jpg' ),
    after: require( '../img/04_after.jpg' )
  },
  {
    id: 5,
    before: require( '../img/05_before.jpg' ),
    after: require( '../img/05_after.jpg' )
  },
  {
    id: 6,
    before: require( '../img/06_before.jpg' ),
    after: require( '../img/06_after.jpg' )
  },
  {
    id: 7,
    before: require( '../img/07_before.jpg' ),
    after: require( '../img/07_after.jpg' )
  },
  {
    id: 8,
    before: require( '../img/08_before.jpg' ),
    after: require( '../img/08_after.jpg' )
  },
]


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1200);
  }

  render() {
    return (<>
      <Header />
      <Content items={ items } />
      <Footer />
    </>)
  }
}

export default App
