import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <span className="footer-copyright">Efim Klimov, {new Date().getFullYear()}</span>

      <ul className="footer-list">
        <li className="social-list-item">
          <a href="https://github.com/efimklimov95" className="social-list-link">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-list-item">
          <a href="https://www.facebook.com" className="social-list-link">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li className="social-list-item">
          <a href="https://www.pinterest.com" className="social-list-link">
            <i className="fab fa-pinterest"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer