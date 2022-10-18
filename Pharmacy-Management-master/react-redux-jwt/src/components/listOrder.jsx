import React, { Component } from 'react'
//import EmployeeService from '../services/EmployeeService'
//import drugService from '../services/drugService';
import orderService from '../services/orderService';
import Navbar from './Navbar';

class ListOrders extends Component {
    constructor(props) {
        super(props)

        this.state = {
                orders: []
        }
        //this.addDrugs = this.addDrugs.bind(this);
        //this.editDrugs = this.updateDrugs.bind(this);
        //this.deleteDrugs = this.deleteDrugs.bind(this);
    }

    
    viewOrders(id){
        this.props.history.push(`/view-order/${id}`);
    }
    

    componentDidMount(){
        orderService.getAllOrders().then((res) => {
            this.setState({ orders: res.data});
        });
    }

    

    render() {
        return (
            <div>
                <Navbar/>              
                 
                 <div className = "card row">
                {/* <button className="btn btn-primary " onClick={this.addDrugs}> Add Drugs</button>
                 <div className = "row">
                   
        </div>*/}
                 <br></br>
                 <h2 className="text-center">Order List</h2>
                 <br/>
                        <table className = "table table-striped table-bordered text-center ">

                            <thead>
                                <tr>
                                    <th> Order Id </th>
                                    <th> Drug Name</th>
                                    <th> Doctor Name</th>
                                    <th> Drug Quantity</th>
                                    <th> Order Value</th>
                                    <th> Order Date</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map(
                                        order => 
                                        <tr key = {order.id}>
                                             <td>{order.id}</td>
                                             <td> {order.drugname} </td>   
                                             <td> {order.doctorname}</td>
                                             <td> {order.quantity}</td>
                                             <td> {order.cost}</td>
                                             <td> {order.date}</td>
                                             <td>
                                                 
                                                 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewOrders(order.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListOrders