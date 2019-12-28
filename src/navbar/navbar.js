import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'



class Navbar extends Component {
  render() {

    return (
      <nav class="navbarStyle">
        <div className='section1'>
            <h2>Accueil</h2>
            <h2>Tontine</h2>
        </div>
        <div className='section2'>
          <Link to='/tontine' ><button class="btn btn-outline-success my-2 my-sm-0" type="submit"> Create Tontine </button></Link>
          <Link to='/participant'><button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Add Participant</button></Link>
          <Link to='/createuser'><button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Create User</button> </Link>
        </div>
      </nav>
    );


  }

}

export default Navbar;