import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import PatientTableRow from './patientTableRow';


export default class PatientList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Patients: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/Patients/')
      .then(res => {
        this.setState({
          Patients: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.Patients.map((res, i) => {
      return <PatientTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Patient Age</th>
            <th>Patient Result</th>
            <th>Patient Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}