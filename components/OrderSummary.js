import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCartCount, decrementCartCount, resetCartCount } from '../store'


class OrderSummary extends Component {

    render() {

        return (
            <div>
                <div className="container">
                    cart 
                </div>
        
                <style jsx>{`
                .container {
                padding: 50px;
                text-align: center;
                }
                `}</style>
            </div>
        )
    }
}

export default connect()(OrderSummary);
