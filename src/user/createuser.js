import React, { Component } from 'react';
import "./createuser.css";
import { create_user } from '../Service/Service';


class Createuser extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             address : ''
        }
    }



    createUser = event => {
        event.preventDefault()
        create_user(this.state)
            .then(response => console.log(response))
            .catch(e => console.error(e))
    }
    

    render() {

        return (
            <div className="wraper">
                <div className="form-wraper">

                    <form onSubmit={this.createUser}>
                        <div className="idName">
                            <label htmlFor="idName">Adress-User</label>
                            <input type="text"
                                onChange={ e => this.setState({ address : e.target.value })}
                                className=""
                                placeholder="adress-user"
                                type="text"
                                name="address">
                            </input>
                        </div>
                        <div className="adUser">
                            <button type="submit">ADD*User</button>
                        </div>
                    </form>
                </div>
            </div>

        );


    }

}

export default Createuser;