import React, { Component } from 'react'
//import EmployeeService from '../services/EmployeeService'
import drugService from '../services/drugService'
import Navbar from './Navbar'

class ViewDrugs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            drugs: {}
        }
    }

    componentDidMount(){
        drugService.getDrugById(this.state.id).then( res => {
            this.setState({drugs: res.data});
        })
        drugService.getDrugByName(this.state.id).then( res => {
            this.setState({drugs: res.data});
        })
    }

    render() {
        return (
            <div>
                <Navbar/>

                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Drug Details</h3>
                    <div className = "card-body" style={{ background: "rgb(47,79,79)" }}>
                        <div className='row' >
                            <label> <h4>Drug Name: </h4>   <i> { this.state.drugs.drugName }</i></label>                            
                        </div>
                        <div className = "row">
                            <label> <h4>Drug Price: </h4> <i>{ this.state.drugs.drugPrice }</i></label>
                            <div> </div>
                        </div>
                        <div className = "row">
                            <label> <h4>Drug Quantity: </h4> <i>{ this.state.drugs.drugQuantity }</i></label>
                            <div> </div>
                        </div>
                        <div className = "row">
                            <label> <h4>Drug Expiry Date: </h4><i>{ this.state.drugs.expiryDate }</i></label>
                            <div> </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewDrugs