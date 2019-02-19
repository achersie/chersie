import React, { Component } from 'react'

import Layout from '../components/Layout'
import OrderSummary from '../components/OrderSummary'

class Cart extends Component {

  render () {
    
    return (
      <Layout>
        <OrderSummary />
      </Layout>
    )
  }
}

export default Cart
