import React , {Component} from 'react';
import  "./ctontine.css";


class Ctontine extends Component {
    render(){
       
     return(
         <div className="wrapper">
             <div className="form-wrapper">
                 
                 <form >
                     <div className="idName">
                         <label htmlFor="idName">ID-Tontine</label>
                         <input type="text" 
                          className="" 
                          placeholder="id-Tontine"
                           type="text"
                            name="firstName">

                            </input>
                            </div>
                            <div className="nbrName">
                         <label htmlFor="nbrName">NBR-Participants</label>
                         <input type="text" 
                          className="" 
                          placeholder="nbr-P"
                           type="text"
                            name="nbrName">

                            </input>
                            </div>
                            <div className="montantName">
                         <label htmlFor="montanttName">Montant</label>
                         <input type="text" 
                          className="" 
                          placeholder="montant"
                           type="text"
                            name="montantName">

                            </input>
                            </div>
                            <div className="cercleName">
                         <label htmlFor="cercleName">NBR-Cercle</label>
                         <input type="text" 
                          className="" 
                          placeholder="nbr-C"
                           type="text"
                            name="cercleName">

                            </input>
                            </div>
                            <div className="frName">
                         <label htmlFor="frName">Frequence</label>
                         <input type="text" 
                          className="" 
                          placeholder="fr"
                           type="text"
                            name="frName">

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