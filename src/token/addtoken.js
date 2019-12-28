import React , {Component} from 'react';
import  "./addtoken.css";


class Addtoken extends Component {
    render(){
       
     return(
         <div className="wraper">
             <div className="form-wraper">
                 
                 <form >
                     <div className="idName">
                         <label htmlFor="idName">Symbol</label>
                         <input type="text" 
                          className="" 
                          placeholder="id-Tontine"
                           type="text"
                            name="firstName">

                            </input>
                            </div>
                           
                            <div className="address">
                         <label htmlFor="address">address</label>
                         <input type="text" 
                          className="" 
                          placeholder="address"
                           type="text"
                            name="address">

                            </input>
                            </div>
                            





                            <div className="dParticipant">
              <button type="submit">ADD*NewToken</button>
              
            </div>
                 </form>






             </div>






         </div>

     );
     
       
    }
 
}

export default Addtoken;