import React from 'react'
import Link from 'next/link'

const navigationBar = (props) => {
  return (
        <nav>
            <ul>
                <li>
                  <Link href="/">
                    <a>All Products</a>
                  </Link>
                </li>
                <li>Nike</li>
                <li>Adidas</li>
                <li className="cart">
                    <Link href="/cart">
                    <a> Cart &nbsp; <span className="badge">{ props.cart }</span></a>
                    </Link>
                </li>
            </ul>
            
            <style jsx>{`
              .cart {
                float: right;
                margin-right: 100px;
              }
              nav {
                  position: fixed;
                  width: 100%;
                  background-color: white;
                  box-shadow: 0px -2px 14px 0px #444444;
                  padding: 10px 30px;
              }
              ul {
                  width: 100%;
                  margin: 10px 0px;
              }
              li {
                  list-style-type: none;
                  position: relative;
                  float: left;
                  text-align: center;
                  vertical-align: middle;
                  padding: 10px 40px;
              }
              .badge {
                background-color: #444444;
                color: #fff;
                padding: 5px 8px;
                border-radius: 50%;
                font-size: 11px;
                line-height: 0.10em;
              }
              a {
                text-decoration: none;
              }
            `}</style>
            
        </nav>
  )
}

export default navigationBar;
