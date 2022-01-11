import React from 'react';
import Users from './components/Users'
import './App.css';

class App extends React.Component {
  state = {
    users: [{
      id: 1,
      firstName: "Alex",
      lastName: "Vrbaski",
      street:"5th Avenue",
      city: "New York"
    }]
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let {firstName, lastName, street, city} = this.state;
    if(!firstName || !lastName || !street || !city){
      alert("Fill all fields!")
    } else {
      let newUser = {
        id: this.state.users.length + 1,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        street: this.state.street,
        city: this.state.city
      }
      let users = this.state.users;
      users.push(newUser)
      this.setState(users)
    }
  }
  handleDelete = (id)=>{
    let toDeleteUsers = this.state.users.filter(el => el.id !== id)
    this.setState({
      users: toDeleteUsers
    })
  }
  handleChange = (e) => {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }
  render() {

    return (
      <div className="container">
        <form className="form" method="post" onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label className="first-name" htmlFor="fname">Firstname</label>
            <input id="fname" type="text" name='firstName' placeholder="Firstname" onChange={this.handleChange} />
          </div>
          <div className="input-container">
            <label className="last-name" htmlFor="lname">Lastname</label>
            <input id="lname" type="text" name="lastName" placeholder="Lastname" onChange={this.handleChange} />
          </div>
          <div className="input-container">
            <label className="street" htmlFor="street">Street</label>
            <input id="street" type="text" name='street' placeholder="Street" onChange={this.handleChange} />
          </div>
          <div className="input-container">
            <label className="city" htmlFor="city">City</label>
            <input id="city" type="text" name='city' placeholder="City" onChange={this.handleChange}/>
          </div>
          <button className="btn" type="submit">Insert</button>
        </form>
        <Users userInfo = {this.state.users} handleDelete={this.handleDelete}>
          
        </Users>
      </div>
    );
  }
}

export default App;
