import React from 'react';
import styles from "./SearchCity.module.css";

function SearchCity (props) {
   console.log(props)
    return (
        <div className={styles.wrapper}>
        <form className={styles.insideWrapper} onSubmit={props.submit}>
        <input type='text' placeholder='Type in city name' value={props.value} onChange={props.change} />
        <button type="submit" className="btn btn-primary">Download weather</button>
        </form>
      </div>
    )
    }

    export default SearchCity;