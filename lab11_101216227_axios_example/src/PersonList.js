import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
    // Durum (state) değerlerini tanımlayın
    state = {
        persons: []
    };

    // Bileşen yüklendiğinde veri çekmek için
    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(error => {
                console.error("There was an error fetching data!", error);
            });
    }

    render() {
        return (
            <div>
                <h1>Person List</h1>
                <ul>
                    {this.state.persons.map(person => (
                        <li key={person.login.uuid}>{person.name.first} {person.name.last}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PersonList;
