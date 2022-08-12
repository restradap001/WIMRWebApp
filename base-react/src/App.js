import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            activeItem: {id: null, name: '', type: '', address: '', telephone: '',},
            editable: false,
        }
        this.fetchRestaurants = this.fetchRestaurants.bind(this);
    };

    componentWillMount() {
        this.fetchRestaurants()
    }

    /* This function fetch the restaurant data from django api url */
    fetchRestaurants() {
        fetch('http://localhost:8000/api/restaurants/').
        then(response => response.json()).
        then(data =>
            this.setState({
                restaurants: data
            })
        )
    }

    handleChange(e) {
        var name = e.target.id;
        var value = e.target.value;
    }

    /* Here we show the database data using HTML components */
    render() {
        var restaurants = this.state.restaurants;
        return(
            <div className="container">
                <div id="restaurant-list-container">
                    <table className="table table-hover" id="restaurant-list">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">name</th>
                                <th scope="col">type</th>
                                <th scope="col">address</th>
                                <th scope="col">telephone</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                restaurants.map(function (restaurant, index) {
                                    return(
                                        <tr key={index}>
                                            <th scope="row">{restaurant.id}</th>
                                            <td>{restaurant.name}</td>
                                            <td>{restaurant.type}</td>
                                            <td>{restaurant.address}</td>
                                            <td>{restaurant.telephone}</td>
                                            <td>
                                                <button type="button" className="btn btn-secondary">
                                                    <i className="bi bi-pencil"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-danger">
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default App;
