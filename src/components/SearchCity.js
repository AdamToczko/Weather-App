import React from 'react';

// input tekstowy do wpisania nazwy miasta
// Button do obsługi zapytania axiosa z wpisaną przez użytkownika nazwą miasta

function SearchCity (props) {
   
    // onInputChange =(event) => {
    //     const {value} = event.target
    
    //     this.setState({inputValue: value})
    
    //     console.log({value});
    // }
    
    return (
        <div>
        <form onSubmit={props.submit}>
        <input type='text' placeholder='Wpisz miasto' value={props.value} onChange={props.change} />
        <span> Pokaz co wpisuje:  <span style={{color: 'yellow'}}>{props.value}</span> </span>
        
        {/* <div className="form-group row">
        <div className="col-xs-2">
        <label htmlFor="ex1">col-xs-2</label>
        <input className="form-control" id="ex1" type="text" />
        </div>
        </div> */}
        <button type="submit" className="btn btn-primary">Pobierz pogodę</button>
        </form>
      </div>
    )
    
    }


    export default SearchCity;