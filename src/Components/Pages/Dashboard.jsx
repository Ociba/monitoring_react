import React, { Component } from 'react';
import Cards from './Cards';
import Graphs from './Graphs';

class Dashboard extends Component {
    render () {
        return (
            <div>
            < Cards />
            < Graphs />
            </div>
        );
    }
}
export default Dashboard;