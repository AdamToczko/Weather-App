import React from "react";
import Moment from "react-moment";
import styles from "./ViewWeather.module.css";

function ViewWeather(props) {
    const {
        long,
        lati,
        weatherDescription,
        weatherIcon,
        temp,
        pressure,
        humidity,
        tempMin,
        tempMax,
        windSpeed,
        clouds,
        sunrise,
        sunset,
        error,
        city,
        country,
        dataNotLoaded,
        timezone,
    } = props.weather;

    let Sunrise = new Date(sunrise * 1000).toLocaleTimeString();
    let Sunset = new Date(sunset * 1000).toLocaleTimeString();

    let date = new Date();

    let UpperCaseCity = `${city}`.charAt(0).toUpperCase() + `${city}`.slice(1);
    console.log(UpperCaseCity);

    if (dataNotLoaded && !error) {
        return <div></div>;
    } else if (error) {
        return (
            <span className={styles.errorMessage1}>
                Please try different city as{" "}
                <span className={styles.errorMessage2}>{city}</span> is not in
                our database{" "}
            </span>
        );
    } else {
        return (
            <div className={styles.displayWrapper}>
                <div className="col-12 col-sm-12">
                    Searched City date & time{" "}
                    <span className={styles.displayFont}>
                        {
                            <Moment
                                add={{ seconds: timezone - 3600 }}
                                format="YYYY-MM-DD hh:mm:ss"
                            >
                                {date}
                            </Moment>
                        }
                    </span>
                </div>

                <div className="w-100 d-none d-md-block"></div>
                <div className="row verticalAlign">
                    <div className="col-6 col-sm-4">
                        City:{" "}
                        <span className={styles.displayFont}>
                            {UpperCaseCity}
                        </span>
                    </div>
                    <div className="col-6 col-sm-4">
                        Country:{" "}
                        <span className={styles.displayFont}>{country}</span>{" "}
                    </div>
                    <div className="col-6 col-sm-4">
                        Description:{" "}
                        <span className={styles.displayFont}>
                            {weatherDescription}
                        </span>
                    </div>
                    <div className="w-100 d-none d-md-block"></div>
                    <div className="col-6 col-sm-4">
                        longitude:{" "}
                        <span className={styles.displayFont}>{long}</span>
                    </div>
                    <div className="col-6 col-sm-4">
                        latitude:{" "}
                        <span className={styles.displayFont}>{lati}</span>
                    </div>
                    <div className="col-6 col-sm-4">
                        Wind:{" "}
                        <span className={styles.displayFont}>{windSpeed}</span>{" "}
                        m/s
                    </div>
                    <div className="w-100 d-none d-md-block"></div>
                    <div className="col-6 col-sm-4">
                        Current temp:{" "}
                        <span className={styles.displayFont}>{temp} </span>°C
                    </div>
                    <div className="col-6 col-sm-4">
                        Min temp:{" "}
                        <span className={styles.displayFont}>{tempMin}</span> °C
                    </div>
                    <div className="col-6 col-sm-4">
                        Max temp:{" "}
                        <span className={styles.displayFont}>{tempMax}</span> °C
                    </div>
                    <div className="w-100 d-none d-md-block"></div>
                    <div className="col-6 col-sm-4">
                        Clouds:{" "}
                        <span className={styles.displayFont}>{clouds}</span>
                    </div>
                    <div className="col-6 col-sm-4">
                        Pressure:{" "}
                        <span className={styles.displayFont}>{pressure} </span>
                        hpa
                    </div>
                    <div className="col-6 col-sm-4">
                        Humidity:{" "}
                        <span className={styles.displayFont}>{humidity}</span> %
                    </div>
                    <div className="w-100 d-none d-md-block"></div>

                    <div className="col-6 col-sm-4">
                        Sunrise:{" "}
                        <span className={styles.displayFont}>{Sunrise}</span>
                    </div>
                    <div className="col-6 col-sm-4">
                        Sunset:{" "}
                        <span className={styles.displayFont}>{Sunset}</span>
                    </div>
                    <div className="col-6 col-sm-4">
                        {" "}
                        <img
                            alt="weatherIcon"
                            src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewWeather;
