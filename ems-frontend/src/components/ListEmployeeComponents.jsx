import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import {Link} from 'react-router-dom';

class ListEmployeeComponents extends Component {

    constructor(props){
        super(props)

        this.state ={
            employees: []
        }
        this.addEmployee =this.addEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>{
            this.setState({employees: res.data});
        })
    }

    addEmployee(){
            this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                
                <h2 className='text-center'>Employee List</h2>
                <Link to="/add-employee" >
                <button className='btn btn-primary'>Add Employee</button>
                </Link>
                {/* <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button> */}
                <div className='row'>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Date of Birth</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key = {employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.first_name}</td>
                                        <td>{employee.last_name}</td>
                                        <td>{employee.date_of_birth}</td>
                                        <td>{employee.salary}</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>

            </div>
        );
    }
}

export default ListEmployeeComponents;