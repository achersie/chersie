import React, { Component } from 'react'
import { connect } from 'react-redux'

class CartModal extends Component {

    render() {

        const { products, total } = this.props;
        const { handleClose, show } = this.props;
        const showHideClassName = show ? "backdrop show" : "backdrop hide";

        return (
            <div className={showHideClassName} onClick={handleClose}>
                <div className='modal'>
                    <div className="container">
                        {   products.map( ( product, index ) => {
                                return (
                                    <div className = 'prod-container' key = {  index } >  
                                        <img className='image' src={ product.imageUrl }/> 
                                        <div className='details'>
                                            <span className='name'>{ product.name }</span>
                                            <span className='price'>$ { product.price }</span>
                                        </div>
                                    </div>
                                )
                            }) 
                        }
                       
                    </div>
                </div>
            <style jsx>{`
                .backdrop {
                    position: fixed;
                    background: rgba(0,0,0,.65);
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
                    width: 25%;
                    top: 18%;
                    padding: 12px;
                    background-color: #fff;
                }
    
                @media only (min-device-width : 320px) and (max-device-width : 480px) {
                    .modal {
                        width: 800px;
                    }
                }

                .view-cart {
                    float: right;
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