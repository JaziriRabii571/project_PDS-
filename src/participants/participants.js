import React , {Component} from 'react';
import  "./participants.css";


class Participants extends Component {
    render(){
       
     return(
         <div className="wraper">
             <div className="form-wraper">
                 
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
                           
                            <div className="ordre">
                         <label htmlFor="ordre">Ordre</label>
                         <input type="text" 
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