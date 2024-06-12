import React, {useEffect, useState} from 'react';
import classes from './styles.module.css'
import {stationsNames} from "../../datasets/stations_names";
import Station from "../Station";
import InputText from "../InputText";

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

    useEffect(() => {
        console.log(value)
    }, [value])

    return (
        <div className={classes.input__wrapper} onFocus={handleInputFocus} onBlur={handleInputBlur}>
            <div className={classes.label__wrapper} style={{backgroundColor: `var(--color-line-${value.id_line})`}}></div>
            <InputText
                label={label}
                value={search}
                placeholder={placeholder}
                onChange={handleSearchChange}
            />
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