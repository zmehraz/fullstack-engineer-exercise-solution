import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreatePatient extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangePatientName = this.onChangePatientName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePatientAge = this.onChangePatientAge.bind(this);
    this.onChangePatientResult= this.onChangePatientResult.bind(this);
    this.onChangePatientLocation= this.onChangePatientLocation.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      patient_name: '',
      date: '',
      patient_age: '',
      patient_result: '',
      patient_location: ''
    }
  }

  onChangePatientName(e) {
    this.setState({ patient_name: e.target.value })
  }

  onChangeDate(e) {
    this.setState({ date: e.target.value })
  }

  onChangePatientAge(e) {
    this.setState({ patient_age: e.target.value })
  }

  onChangePatientResult(e) {
    this.setState({ test_result: e.target.value })
  }

  onChangePatientLocation(e) {
    this.setState({ test_location: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const patientObject = {
      name: this.state.name,
      date: this.state.date,
      patient_age: this.state.patient_age,
      patient_result: this.state.patient_result,
      patient_location:this.state.patient_location
    };
    axios.post('http://localhost:4000/patients/create-patient', patientObject)
      .then(res => console.log(res.data));

    this.setState({ patient_name: '', date: '', patient_age: '', patient_result: '', patient_location: '' })
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="patientnaem">
          <Form.Label>Patient Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangePatientName} />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeDate} />
        </Form.Group>

        <Form.Group controlId="patientage">
          <Form.Label>Patient Age</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangePatientAge} />
        </Form.Group>

        <Form.Group controlId="patientresult">
          <Form.Label>Patient Result</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangePatientResult} />
        </Form.Group>

        <Form.Group controlId="patientlocation">
          <Form.Label>Patient Location</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangePatientLocation} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Patient
        </Button>
      </Form>
    </div>);
  }
}