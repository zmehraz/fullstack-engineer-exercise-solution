import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class EditPatient extends Component {

  constructor(props) {
    super(props)

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

  componentDidMount() {
    axios.get('http://localhost:4000/Patients/edit-Patient/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          patient_name: res.data.patient_name,
          date: res.data.date,
          patient_age: res.data.patient_age,
          patient_result: res.data.patient_result,
          patient_location: res.data.patient_location
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
    this.setState({ patient_result: e.target.value })
  }

  onChangePatientLocation(e) {
    this.setState({ patient_location: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const PatientObject = {
      patient_name: this.state.patient_name,
      date: this.state.date,
      patient_age: this.state.patient_age,
      patient_result: this.state.patient_result,
      patient_location: this.state.patient_location,
    };

    axios.put('http://localhost:4000/Patients/update-Patient/' + this.props.match.params.id, PatientObject)
      .then((res) => {
        console.log(res.data)
        console.log('Patient successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Patient List 
    this.props.history.push('/Patient-list')
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