import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Özelleştirilmiş stil dosyanızı burada tanımlayabilirsiniz

class PersonList extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(error => {
                console.error("There was an error fetching data!", error);
            });
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center my-4">User List</h1>
                {this.state.persons.map(person => (
                    <div className="card mb-3" key={person.login.uuid}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={person.picture.large} alt="Profile" className="img-fluid rounded-start" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{person.name.title} {person.name.first} {person.name.last}</h5>
                                    <p className="card-text">
                                        <strong>User Name:</strong> {person.login.username}<br />
                                        <strong>Gender:</strong> {person.gender.toUpperCase()}<br />
                                        <strong>Time Zone Description:</strong> {person.location.timezone.description}<br />
                                        <strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}<br />
                                        <strong>Email:</strong> {person.email}<br />
                                        <strong>Birth Date and Age:</strong> {person.dob.date} ({person.dob.age})<br />
                                        <strong>Register Date:</strong> {person.registered.date}<br />
                                        <strong>Phone#:</strong> {person.phone}<br />
                                        <strong>Cell#:</strong> {person.cell}
                                    </p>
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonList;
