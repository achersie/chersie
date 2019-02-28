import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

import { decrementCartCount, resetCartCount } from '../store'


class OrderSummary extends Component {

    decrement = (id, price) => {
        const { dispatch } = this.props
        dispatch (decrementCartCount(id, price))
    }

    render() {

        const { products, total } = this.props;

        return (
            <div>
                <div className="container">
                    {   products.length ? products.map( ( product, index ) => {
                            return (
                                <div className = 'prod-container' key = {  index } >  
                                    <img className='image' src={ product.imageUrl }/> 
                                    <div className='btn-container'>
                                        <span className='remove-btn' onClick= { () => this.decrement(index, product.price) }>Remove</span>
                                    </div>
                                    <div className='details'>
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
                    <div>
                        <h4>Total: <span>$  { total } </span></h4>
                    </div>
                </div>

                <style jsx>{`
                    .container {
                        padding: 100px 50px;
                        text-align: center;
                        width: 40%;
                        margin: auto;
                    }   

                    .prod-container {
                        border-bottom: 1px solid #44444429;
                    }

                    .image {
                        width: 90px;
                    }

                    .details {
                        float: right;
                        line-height: 5.9em;
                        width: 50%;
                        margin: 0px 10px;
                    }

                    .name .price {
                        margin: 0px 30px;
                    }

                    .name {
                        float: left;
                    }

                    .price {
                        float: right;
                    }

                    .btn-container {
                        float: right;
                        line-height: 5.9em;
                        width: 10%;
                        margin: 0px 10px;
                        color: red;
                    }

                    .continue {
                        padding: 10px 30px;
                        font-size: 12px;
                        margin: 10px;
                        border: 1px solid #444444;
                        background-color: #fff;
                    }
                `}</style>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { products, total } = state
    return { products, total }
}  

export default connect(mapStateToProps)(OrderSummary);
