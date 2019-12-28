import React, { Component } from 'react';
import "./ctontine.css";
import { create_tontine } from '../Service/Service';


class Ctontine extends Component {

    constructor(props) {
        super(props)

        this.state = {
            _ID_Tontine : '',
            NBR_P : 0,
            Montant: 0,
            NBR_cercle: 0,
            frequence : 0
        }
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    submitForm = event => {
        event.preventDefault()
        create_tontine(this.state)
            .then(response => console.log(response))
            .catch(error => console.error(error))
    }



    render() {

        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <form onSubmit={this.submitForm} >
                        <div className="idName">
                            <label htmlFor="idName">ID-Tontine</label>
                            <input type="text"
                                onChange={this.handleChange}
                                className=""
                                placeholder="id-Tontine"
                                type="text"
                                name="_ID_Tontine">

                            </input>
                        </div>
                        <div className="nbrName">
                            <label htmlFor="nbrName">NBR-Participants</label>
                            <input type="text"
                                onChange={this.handleChange}
                                className=""
                                placeholder="nbr-P"
                                type="text"
                                name="NBR_P">

                            </input>
                        </div>
                        <div className="montantName">
                            <label htmlFor="montanttName">Montant</label>
                            <input type="text"
                                onChange={this.handleChange}
                                className=""
                                placeholder="montant"
                                type="text"
                                name="Montant">

                            </input>
                        </div>
                        <div className="cercleName">
                            <label htmlFor="cercleName">NBR-Cercle</label>
                            <input type="text"
                                onChange={this.handleChange}
                                className=""
                                placeholder="nbr-C"
                                type="text"
                                name="NBR_cercle">

                            </input>
                        </div>
                        <div className="frName">
                            <label htmlFor="frName">Frequence</label>
                            <input type="text"
                                onChange={this.handleChange}
                                className=""
                                placeholder="fr"
                                type="text"
                                name="frequence">

                            </input>
                        </div>
                        <div className="createTontine">
                            <button type="submit">Create-Tontine</button>
                        </div>
                    </form>
                </div>
            </div>

        );


    }

}

export default Ctontine;
