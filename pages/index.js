import React from 'react'
import { connect } from 'react-redux'
import Products from '../components/Products'
import NavigationBar from '../components/navigationBar'

class Index extends React.Component {

  render () {
    const { cartCount } = this.props;
    
    return (
      <div>
        <NavigationBar cart = { cartCount }/>
        <Products />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { cartCount } = state
  return { cartCount }
}  


export default connect(mapStateToProps)(Index)
