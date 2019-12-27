import React , {Component} from 'react';

class Tontine extends Component {
    render(){
       
     return(
<form>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputTontine" class="btn btn-secondary">ID-Tontine</label>
      <input type="text" class="form-control" id="inputTontine"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputParticipants" class="btn btn-secondary">NBR-Participants</label>
      <input type="text" class="form-control" id="inputParticipants"/>
    </div>
  
  <div class="form-group col-md-4">
    <label for="inputMontant" class="btn btn-secondary">Montant</label>
    <input type="text" class="form-control" id="inputMontant" />
  </div>
  <div class="form-group col-md-4">
    <label for="inputCercle" class="btn btn-secondary">NBR-Cercle</label>
    <input type="text" class="form-control" id="inputCercle" />
  </div>
  
    <div class="form-group col-md-4">
      <label for="inputFrequence" class="btn btn-secondary">frequence</label>
      <input type="text" class="form-control" id="inputFrequence"/>
    </div>
    </div>
  
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>

     );
     
       
    }
 
}

export default Tontine;