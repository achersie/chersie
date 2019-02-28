import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

import { decrementCartCount, resetCartCount } from '../store'
import '../style.css'

class OrderSummary extends Component {

    decrement = (id, price) => {
        const { dispatch } = this.props
        dispatch (decrementCartCount(id, price))
    }

    reset = () => {
        const { dispatch } = this.props
        dispatch (resetCartCount())
    }

    render() {

        const { products, total } = this.props;

        return (
            <div>
                <div className="orderSummary-cont">
                    {   products.length ? products.map( ( product, index ) => {
                            return (
                                <div className='prod-container' key = {  index } >  
                                    <img className='image' src={ product.imageUrl }/> 
                                    <div className='btn-container'>
                                        <span className='remove-btn' onClick= { () => this.decrement(index, product.price) }>Remove</span>
                                    </div>
                                    <div className='orderSummary-details'>
                                        <span className='name'>{ product.name }</span>
                                        <span className='price'>$ { product.price }</span>
                                    </div>
                                </div>
                            )
                        }) : <div>
                                <h4>Your cart is empty!</h4>
                                <Link href='/'><a><button className='continue'>Continue Shopping</button></a></Link>
                             </div>
                    }
                    <div className='cart-footer'>
                        <span>Total: $ { total } </span> 
                        { products.length ? <span className='remove-all' onClick={() => this.reset()}>Remove All</span> : ''}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { products, total } = state
    return { products, total }
}  

export default connect(mapStateToProps)(OrderSummary);
