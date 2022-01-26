import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

export default class PatientTableRow extends Component {
  constructor(props) {
    super(props)
    this.deletePatient = this.deletePatient.bind(this)
  }

  deletePatient() {
    axios
      .delete(
        'http://localhost:4000/Patients/delete-Patient/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('Patient successfully deleted!')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj._id}</td>
        <td>
          <Link
            className="edit-link" path={"product/:id"}
            to={'/edit-Patient/' + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deletePatient} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}
