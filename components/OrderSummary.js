import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decrementCartCount, resetCartCount } from '../store'


class OrderSummary extends Component {

    render() {

        const { products } = this.props;

        return (
            <div>
                <div className="container">
                    {   products.map( product => {
                            return (
                                <div className = 'prod-container' key = {  Math.random() } >  
                                    <img className='image' src={ product.imageUrl }/> 
                                    <div className='btn-container'>
                                        <span className='remove-btn'>Remove</span>
                                    </div>
                                    <div className='details'>
                                        <span className='name'>{ product.name }</span>
                                        <span className='price'>$ { product.price }</span>
                                    </div>
                                </div>
                            )
                        }) 
                    }
                    <div>
                        <h4>Total: <span></span></h4>
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
                }
                `}</style>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { products } = state
    return { products }
}  

export default connect(mapStateToProps)(OrderSummary);
