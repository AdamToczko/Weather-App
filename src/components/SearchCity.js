import React from 'react';

// input tekstowy do wpisania nazwy miasta
// Button do obsługi zapytania axiosa z wpisaną przez użytkownika nazwą miasta

class SearchCity extends React.Component{
    constructor(props){
        super(props)
    
        this.state = {inputValue: ''}
    }
    
    onInputChange =(event) => {
        const {value} = event.target
    
        this.setState({inputValue: value})
    
        console.log({value});
    }
    
    render(){
    
    const {inputValue} = this.state;
    
    return (
        <div>
        <input type='text' placeholder='Wpisz tekst' value={inputValue} onChange={this.onInputChange} />
        <span> Pokaz co wpisuje:  <span style={{color: 'yellow'}}>{inputValue}</span> </span>
        <button type="button" className="btn btn-primary">Primary</button>
        </div>
    )
    
    }
    }

    export default SearchCity;