import React, { Component } from 'react'


import orderService from '../services/orderService'
import Navbar from './Navbar'

class ViewOrders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            orders: {}
        }
    }

    componentDidMount(){
        orderService.getOrderbyId(this.state.id).then( res => {
            this.setState({orders: res.data});
        })
    }

    render() {
        return (
            <div>
                <Navbar/>

                <br></br>
                <div className = "card col-md-6 offset-md-3" >
                    <h3 className = "text-center" > View Order Details</h3>
                    <div className = "card-body" style={{ background: "rgb(47,79,79)" }}>
                        <div className='row'  >
                            <label> <h4>Drug Name: </h4>   <i> { this.state.orders.drugname }</i></label>                            
                        </div>
                        <div className='row' >
                            <label> <h4>Doctor Name: </h4>   <i> { this.state.orders.doctorname }</i></label>                            
                        </div>
                        <div className = "row">
                            <label> <h4>Quantity: </h4> <i>{ this.state.orders.quantity}</i></label>
                            <div> </div>
                        </div>
                        <div className = "row">
                            <label> <h4>Order Value: </h4> <i>{ this.state.orders.cost}</i></label>
                            <div> </div>
                        </div>
                        <div className = "row">
                            <label> <h4>Order Date: </h4><i>{ this.state.orders.date }</i></label>
                            <div> </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewOrders