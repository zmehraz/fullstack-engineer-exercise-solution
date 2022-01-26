import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreatePatient from './components/createPatient.component'
import EditPatient from './components/editPatient.component'
import PatientList from './components/patientList.component'

function App() {
  return (
    <div className="App">
       <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/createPatient'} className="nav-link">
                    Create Patient
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/patientList'} className="nav-link">
                    Patient List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreatePatient {...props} />}
                  />
                  <Route
                    exact
                    path="/createPatient"
                    component={(props) => <CreatePatient {...props} />}
                  />
                  <Route
                    exact
                    path="/editPatient/:id"
                    component={(props) => <EditPatient {...props} />}
                  />
                  <Route
                    exact
                    path="/patientList"
                    component={(props) => <PatientList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;