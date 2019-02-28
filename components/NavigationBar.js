import React from 'react'
import Link from 'next/link'

import '../style.css'

const navigationBar = (props) => {
  return (
        <nav>
            <ul>
                <li>
                  <Link href="/">
                    <a>All Products</a>
                  </Link>
                </li>
                <li className="cart" onClick={props.handleOpen}>
                    <a> Cart &nbsp; <span className="badge">{ props.cart }</span></a>
                </li>
            </ul>
        </nav>
  )
}

export default navigationBar;
