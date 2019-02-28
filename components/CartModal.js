import React, { Component } from 'react'
import { connect } from 'react-redux'

import Link from 'next/link'

class CartModal extends Component {

    render() {

        const { products, total } = this.props;
        const { handleClose, show } = this.props;
        const showHideClassName = show ? "backdrop show" : "backdrop hide";

        return (
            <div className={showHideClassName} onClick={handleClose}>
                <div className='modal'>
                    <div className="container">
                        {   (products.length) ? products.map( ( product, index ) => {
                                return (
                                    <div className = 'prod-container' key = {  index } >  
                                        <img className='image' src={ product.imageUrl }/> 
                                        <div className='details'>
                                            <span className='name'>{ product.name }</span>
                                            <span className='price'>$ { product.price }</span>
                                        </div>
                                    </div>
                                )
                            }) : <h4>Your cart is empty!</h4>
                        }
                    </div>
                    <Link href='/cart'><a><button className='view-cart'>View Cart</button></a></Link>
                    <span className='total'>Total: $ { total }</span>
                </div>
            <style jsx>{`
                .backdrop {
                    position: fixed;
                    background: rgba(0, 0, 0, 0.36);
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                }

                .show {
                    display: block;
                }

                .hide {
                    display: none;
                }
    
                .modal {
                    position: fixed;
                    right: 4%;
                    width: 28%;
                    max-height: 450px;
                    top: 11%;
                    padding: 12px;
                    background-color: #fff;
                }
    
                @media only (min-device-width : 320px) and (max-device-width : 480px) {
                    .modal {
                        width: 800px;
                    }
                }

                .container {
                    max-height: 300px;
                    padding: 0px 15px;
                    overflow-y: scroll;
                    overflow-x: hidden;
                    border-bottom: 1px solid #4444441a;
                }

                .view-cart {
                    padding: 7px 25px;
                    font-size: 12px;
                    margin: 10px;
                    border: 1px solid #444444;
                    background-color: #fff;
                }

                .total {
                    float: right;
                    margin: 15px 30px 10px 10px;
                    font-weight: bold;
                }

                .image {
                    width: 90px;
                }

                .details {
                    float: right;
                    line-height: 5.9em;
                    width: 70%;
                }

                .name {
                    float: left;
                }

                .price {
                    float: right;
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

export default connect(mapStateToProps)(CartModal)