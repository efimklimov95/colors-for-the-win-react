import React from 'react'
import SliderImage from './SliderImage'

class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items,
      currentPage: 1
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const btn = document.getElementById("1")
    btn.classList.add("active")
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    })

    for (let i = 1; i <= this.state.items.length; i++) {
      const btn = document.getElementById(i)
      btn.classList.remove("active")
    }

    event.target.classList.add("active")
  }

  render() {
    const { items, currentPage } = this.state

    // Logic for displaying current item
    const indexOfLastItem = currentPage
    const indexOfFirstItem = indexOfLastItem - 1
    const currentItem = items.slice(indexOfFirstItem, indexOfLastItem)

    const renderItems = currentItem.map((item) => {
      return <li key={ item.id }><SliderImage img_before={ item.before } img_after={ item.after } /></li>
    })

    // Logic for displaying page numbers
    const pageNumbers = []
    for (let i = 1; i <= items.length; i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <a
          key={number}
          id={number}
          onClick={this.handleClick}
          className="page-number"
        >
          {number}
        </a>
      )
    })

    return (
      <div>
        <ul className="image-container">
          { renderItems }
        </ul>
        <div className="pagination-container">
          <div className="pagination">
            { renderPageNumbers }
          </div>
        </div>
      </div>
    )
  }
}

export default Pagination