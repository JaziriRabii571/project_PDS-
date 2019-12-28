import React, { Component } from 'react';
import "./participants.css";
import { create_participant } from '../Service/Service';


class Participants extends Component {

    constructor(props) {
        super(props)

        this.state = {
            _ID_Tontine: '',
            ordre: ''
        }
    }

    createParticipant = event => {
        event.preventDefault()
        create_participant(this.state)
    }

    handleInput = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    render() {

        return (
            <div className="wraper">
                <div className="form-wraper">

                    <form onSubmit={this.createParticipant}>
                        <div className="idName">
                            <label htmlFor="idName">ID-Tontine</label>
                            <input type="text"
                                onChange={this.handleInput}
                                className=""
                                placeholder="id-Tontine"
                                type="text"
                                name="_ID_Tontine">

                            </input>
                        </div>
                        <div className="ordre">
                            <label htmlFor="ordre">Ordre</label>
                            <input type="text"
                                onChange={this.handleInput}
                                className=""
                                placeholder="ordre"
                                type="text"
                                name="ordre">

                            </input>
                        </div>
                        <div className="ddParticipant">
                            <button type="submit">ADD*Participant</button>

                        </div>
                    </form>






                </div>






            </div>

        );


    }

}

export default Participants;
