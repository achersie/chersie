import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

import '../style.css'

class CartModal extends Component {

    render() {

        const { products, total } = this.props;
        const { handleClose, show } = this.props;
        const showHideClassName = show ? "backdrop show" : "backdrop hide";

        return (
            <div className={showHideClassName} onClick={handleClose}>
                <div className='modal'>
                    <div className="modal-container">
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { products, total } = state
    return { products, total }
}  

export default connect(mapStateToProps)(CartModal)