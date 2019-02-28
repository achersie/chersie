import React, { Component } from 'react'
import { connect } from 'react-redux'

import Nav from './NavigationBar';
import CartModal from './CartModal';

class Layout extends Component {

  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { cartCount } = this.props;

    return (
      <div>
          <Nav  cart = { cartCount }  handleOpen={this.showModal}/>
          <CartModal show={this.state.show} handleClose={this.hideModal}/>
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
