import React, { Component } from 'react'
import { connect } from 'react-redux'

import Nav from './NavigationBar';

class Layout extends Component {

  render() {
    const { cartCount } = this.props;

    return (
      <div>
         <Nav  cart = { cartCount }/>
        { this.props.children }
        
        <style jsx global>{`
          body {
              font-family: Verdana, Helvetica, sans-serif;
              font-size: 12px;
              margin: 0;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    const { cartCount } = state
    return { cartCount }
}  

export default connect(mapStateToProps)(Layout);
