import React, { Component }  from 'react'
import OrderSummary from '../components/OrderSummary'
import { connect } from 'react-redux'
import NavigationBar from '../components/navigationBar'

class Cart extends Component {
    render () {
        const { cartCount } = this.props;
        
        return (
          <div>
            <NavigationBar cart = { cartCount }/>
            <OrderSummary />
          </div>
        )
      }
}

const mapStateToProps = (state) => {
  const { cartCount } = state
  return { cartCount }
}  


export default connect(mapStateToProps)(Cart)
