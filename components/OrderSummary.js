import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCartCount, decrementCartCount, resetCartCount } from '../store'


class OrderSummary extends Component {

    state = {
        products: [
            { id: 1234, name: 'Nike Mesh Running Shoes', imageUrl: '/static/running/running1.jpg', price: 123 },
            { id: 1908, name: 'Nike Flyknit Lunar 2', imageUrl: '/static/running/running2.jpg', price: 200 },
            { id: 1222, name: 'Nike Flyknit Lunar 2s', imageUrl: '/static/running/running3.jpg', price: 320 },
            { id: 6976, name: 'Nike Air Max 1 Ultra 2.0', imageUrl: '/static/running/running4.jpg', price: 140 },
        ]
    }

    increment = () => {
        const { dispatch } = this.props
        dispatch (incrementCartCount())
    }

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
