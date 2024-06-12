import React, {useState} from 'react';
import classes from './styles.module.css'
import {stationsNames} from "../../datasets/stations_names";
import Station from "../Station";
import {defaultStation} from "../../config";

function StationSelector({value, onChange, name, label, placeholder}) {
    const [onFocus, setOnFocus] = useState(false)
    const [search, setSearch] = useState('')
    const [filteredStations, setFilteredStations] = useState(stationsNames)

    const handleInputFocus = (e) => {
        e.preventDefault()
        setOnFocus(true)
    }

    const handleInputBlur = (e) => {
        e.preventDefault()
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setOnFocus(false);
        }
    }

    const handleStationClick = (station) => {
        onChange({ currentTarget: { name: name, value: station } });
        setSearch(station.name_station)
        setOnFocus(false)
    }

    const handleSearchChange = (e) => {
        const input = e.target.value
        setSearch(input)
        const filtered = stationsNames.filter(station =>
            station.name_station.toLowerCase().startsWith(input.toLowerCase())
        );

        setFilteredStations(filtered);
    }

    const handleDeleteBtn = (e) => {
        e.stopPropagation()
        setSearch('')
        onChange({ currentTarget: { name: name, value: defaultStation }});
        setFilteredStations(stationsNames)
        setOnFocus(false)
    }

    return (
        <div className={classes.input__wrapper} onBlur={handleInputBlur}>
            <div className={classes.input__wrapper}>
                {label !== undefined && <label className={classes.label__element} htmlFor={name}>{label}</label>}
                <div className={classes.text__label}>
                    <div className={classes.label__wrapper} style={{backgroundColor: `var(--color-line-${value.id_line})`}}></div>
                    <input
                        onFocus={handleInputFocus}
                        autoComplete={'off'}
                        className={classes.input__element}
                        id={name}
                        type={"text"}
                        value={search}
                        onChange={handleSearchChange}
                        name={name}
                        placeholder={placeholder}
                    />
                    <button
                        className={classes.cross_btn}
                        onClick={handleDeleteBtn}
                    >
                        <div className={classes.cross}></div>
                    </button>
                </div>
            </div>
            {onFocus &&
                <div className={classes.stations__list__wrapper}>
                    {filteredStations.length !== 0
                        ? filteredStations.map(station => (
                        <div key={`${name}:${station.name_line}:${station.id}:${station.name_station}`}>
                            <button
                                className={classes.button__wrapper}
                                onClick={(e) => handleStationClick(station)}
                            >
                                <Station station={station}/>
                            </button>
                        </div>
                    )) : <p>Станция не найдена</p>
                    }
                </div>
            }
        </div>

    );
}

export default StationSelector;