import React from 'react';
import styles from "./SearchCity.module.css";

// input tekstowy do wpisania nazwy miasta
// Button do obsługi zapytania axiosa z wpisaną przez użytkownika nazwą miasta

function SearchCity (props) {
   
    // onInputChange =(event) => {
    //     const {value} = event.target
    
    //     this.setState({inputValue: value})
    
    //     console.log({value});
    // }
    
    return (
        <div className={styles.wrapper}>
        <form className={styles.insideWrapper} onSubmit={props.submit}>
        <input type='text' placeholder='Type in city name' value={props.value} onChange={props.change} />
        {/* <div className="form-group row">
        <div className="col-xs-2">
        <label htmlFor="ex1">col-xs-2</label>
        <input className="form-control" id="ex1" type="text" />
        </div>
        </div> */}
        <button type="submit" className="btn btn-primary">Download weather</button>
        </form>
      </div>
    )
    
    }


    export default SearchCity;