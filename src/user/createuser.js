import React , {Component} from 'react';
import  "./createuser.css";


class Createuser extends Component {
    render(){
       
     return(
         <div className="wraper">
             <div className="form-wraper">
                 
                 <form >
                     <div className="idName">
                         <label htmlFor="idName">Adress-User</label>
                         <input type="text" 
                          className="" 
                          placeholder="adress-user"
                           type="text"
                            name="firstName">

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