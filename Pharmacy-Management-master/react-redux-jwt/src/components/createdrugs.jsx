import React, { Component } from 'react'
//import EmployeeService from '../services/EmployeeService';
import DrugService from '../services/drugService';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
//import { DatePicker } from "@material-ui/pickers";
import { DatePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class CreateDrugComponent extends Component {

    
    
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            drugName: '',
            drugPrice: '',
            drugQuantity: '',
            expiryDate: ''
        }
        this.changedrugNameHandler = this.changedrugNameHandler.bind(this);
        this.changedrugPriceHandler = this.changedrugPriceHandler.bind(this);
        this.changedrugQuantityHandler = this.changedrugQuantityHandler.bind(this);
        this.changeexpiryDateHandler = this.changeexpiryDateHandler.bind(this);
        this.saveOrUpdateDrug = this.saveOrUpdateDrug.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === 'save') {
            return
        } else {
            DrugService.getDrugById(this.state.id).then((res) => {
                let drug = res.data;
                this.setState({
                    //drugId = drugId,
                    drugName: drug.drugName,
                    drugPrice: drug.drugPrice,
                    drugQuantity: drug.drugQuantity,
                    expiryDate: drug.expiryDate
                });
            });
        }
    }
    saveOrUpdateDrug = (e) => {
        e.preventDefault();
        let drug = {/*drugId:this.state.drugId ,*/drugName: this.state.drugName, drugPrice: this.state.drugPrice,drugQuantity:this.state.drugQuantity, expiryDate: this.state.expiryDate };
        console.log('drug => ' + JSON.stringify(drug));

        // step 5
        if (this.state.id === 'save') {
            DrugService.saveDrugs(drug).then(res => {
                this.props.history.push('/Drugs');
                console.log("Drugs Added Successsfully");
                alert("Drugs Added Successsfully");
            });
        } else {
            DrugService.updateDrugs(drug, this.state.id).then(res => {
                this.props.history.push('/Drugs');
                alert("Drug Updated Successfully");
            });
        }
    }

    changedrugNameHandler = (event) => {
        this.setState({ drugName: event.target.value });
    }
    changedrugPriceHandler = (event) => {
        this.setState({ drugPrice: event.target.value });
    }
    changedrugQuantityHandler = (event) => {
        this.setState({ drugQuantity: event.target.value });
    }
    changeexpiryDateHandler = (event) => {
        this.setState({ expiryDate: event.target.value });
    }

    cancel() {
        this.props.history.push('/drugs');
    }

    getTitle() {
        if (this.state.id === 'save') {
            return <h3 className="text-center">Add Drugs</h3>
        } else {
            console.log(this.state.id);
            return <h3 className="text-center">Update Drugs</h3>            
        }
    }
    
    render() {

        /*const { user: currentUser } = this.props;
        
        if (!currentUser) {
            return <Redirect to="/login" />;
          }*/
        return (
            
            <div>
                <Navbar/>

                <br></br>
                <div className="container bg-image3">
                    <div className="row">
                        <div className="card col-md-10 offset-md-3 offset-md-3 bg">
                            {
                                this.getTitle()
                            }
                            <div className="card-body " style={{ background: "rgb(47,79,79)" }}>
                                <form>
                                    <div className="form-group">
                                        <label> Drug Name: </label>
                                        <input placeholder="First Name" name="drugName" className="form-control"
                                            value={this.state.drugName} onChange={this.changedrugNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Drug Price: </label>
                                        <input placeholder="Drug Price" name="drugPrice" className="form-control"
                                            value={this.state.drugPrice} onChange={this.changedrugPriceHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Quantity: </label>
                                        <input placeholder="Quantity" name="drugQuantity" className="form-control"
                                            value={this.state.drugQuantity} onChange={this.changedrugQuantityHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Expiry Date: </label>
                                        < input placeholder="Date" name="expiryDate" className="form-control" type="Date"
                                            value={this.state.expiryDate} onChange={this.changeexpiryDateHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateDrug}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateDrugComponent