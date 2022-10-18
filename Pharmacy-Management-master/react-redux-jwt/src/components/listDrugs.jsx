import React, { Component } from 'react'
//import EmployeeService from '../services/EmployeeService'
import drugService from '../services/drugService';
import Navbar from './Navbar';

class ListDrugs extends Component {
    constructor(props) {
        super(props)

        this.state = {
                drugs: []
        }
        this.addDrugs = this.addDrugs.bind(this);
        this.editDrugs = this.updateDrugs.bind(this);
        this.deleteDrugs = this.deleteDrugs.bind(this);
    }

    deleteDrugs(drugId){
        drugService.deleteDrugs(drugId).then( res => {
            console.log("drugId");
            this.setState({drugs: this.state.drugs.filter(drugs => drugs.drugId !== drugId)});
            alert("Deleted successfully");
        });
    }
    viewDrugs(drugId){
        this.props.history.push(`/view-drug/${drugId}`);
    }
    updateDrugs(id){
        this.props.history.push(`/add-drug/${id}`);
    }
    

    componentDidMount(){
        drugService.getAllDrugs().then((res) => {
            this.setState({ drugs: res.data});
        });
    }

    addDrugs(){
        this.props.history.push('/add-drug/save');
    }

    render() {
        return (
            <div>
                <Navbar/>              
                 
                 <div className = "card row">
                 <button className="btn btn-primary " onClick={this.addDrugs}> Add Drugs</button>
                
                 <br></br>
                 <h2 className="text-center">Drugs List</h2>
                 <br/>
                        <table className = "table table-striped table-bordered text-center ">

                            <thead>
                                <tr>
                                    <th> Drug Id </th>
                                    <th> Drug Name</th>
                                    <th> Drug Price</th>
                                    <th> Drug Quantity</th>
                                    <th> Expiry Date</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.drugs.map(
                                        drug => 
                                        <tr key = {drug.drugId}>
                                             <td> {drug.drugId}</td>
                                             <td> { drug.drugName} </td>   
                                             <td> {drug.drugPrice}</td>
                                             <td> {drug.drugQuantity}</td>
                                             <td> {drug.expiryDate}</td>
                                             <td>
                                                 <button onClick={ () => this.updateDrugs(drug.drugId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDrugs(drug.drugId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewDrugs(drug.drugId)} className="btn btn-info">View </button>
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

export default ListDrugs