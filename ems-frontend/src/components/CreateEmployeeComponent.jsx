import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            first_name:"",
            last_name:"",
            date_of_birth:"",
            salary:""


        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeDateOfBirthHandler=this.changeDateOfBirthHandler.bind(this);
        this.changeSalaryHandler=this.changeSalaryHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    saveEmployee = (e)=>{
        e.preventDefault();

        let employee = {first_name: this.state.first_name, last_name: this.state.last_name, date_of_birth:this.state.date_of_birth, salary:this.state.salary};
        console.log('employee => '+ JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees');
        });
        }
    
    cancel(){
        this.props.history.push('/employees');
        }

    

    changeFirstNameHandler = (event) => {
        this.setState({first_name: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({last_name: event.target.value});
    }

    changeDateOfBirthHandler = (event) => {
        this.setState({date_of_birth: event.target.value});
    }

    changeSalaryHandler = (event) => {
        this.setState({salary: event.target.value});
    }

    render() {
        return (
            <div>
        
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Add Employee</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>First Name</label>
                                    <input placeholder='First Name' name='first_name' className='form-control' 
                                    value={this.state.first_name} onChange={this.changeFirstNameHandler} />

                                    <label>Last Name</label>
                                    <input placeholder='Last Name' name='last_name' className='form-control'
                                     value={this.state.last_name} onChange={this.changeLastNameHandler} />

                                    <label>Date of Birth</label>
                                    <input placeholder='Date of Birth' name='date_of_birth' className='form-control'
                                    value={this.state.date_of_birth} onChange={this.changeDateOfBirthHandler}/>

                                    <label>Salary</label>
                                    <input placeholder='Salary' name='salary' className='form-control'
                                    value={this.state.salary} onChange={this.changeSalaryHandler}/>

                                    
                                </div>

                                <button className='btn btn-success'onClick={this.saveEmployee}>Save</button>
                                <button className='btn btn-danger'onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>

                                
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;