import classes from './styles.module.css'
import UserBlock from "../../components/UserBlock";
import Clock from "../../components/Clock";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import {useEffect, useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import StationSelector from "../../components/StationSelector";
import {defaultStation} from "../../config";

function MainPage() {

    const [filters, setFilters] = useState({
        searchBar: '',
        startStation: defaultStation,
        endStation: defaultStation,
        date: [new Date(), new Date()],
        startTime: '00:00',
        endTime: '00:00'
    })

    const [date, setDate] = useState([new Date(), new Date()]);

    useEffect(() => {
        console.log(filters)
    }, [filters])

    useEffect(() => {
        setFilters({...filters, date: date})
    }, [date])

    const handleFiltersChange = ({currentTarget: input}) => {
        setFilters({...filters, [input.name]: input.value})
    }

    const handeSearchButton = (e) => {
        e.preventDefault()
        alert(1)
    }

    return (
        <div className={classes.page__wrapper}>
            <div className={classes.menu__wrapper}>
                {/* Информация о пользователе */}
                <UserBlock/>

                {/* Текущее вермя */}
                <div className={classes.clock__wrapper}>
                    <Clock/>
                </div>

                {/* Кнопки управления */}
                <div className={classes.buttons__wrapper}>
                    <div className={classes.button__adaptive}>
                        <Button >Адаптивное распределение</Button>
                    </div>
                    <div className={classes.button__distribution}>
                        <Button>Распределение</Button>
                    </div>
                    <div className={classes.button__confirm}>
                        <Button>Подтвердить</Button>
                    </div>
                </div>

                {/* Фильтры поиска */}
                <div className={classes.filters__wrapper}>
                    <p className={'bold__text'}>Фильтры поиска</p>
                    {/* Строка поиска */}
                    <div className={classes.searchbar__wrapper}>
                        <InputText
                            label={'Строка поиска'}
                            name='searchBar'
                            value={filters.searchBar}
                            placeholder={'ФИО или номер телефона'}
                            onChange={handleFiltersChange}
                        />
                        <Button onClick={handeSearchButton}>Найти</Button>
                    </div>
                    {/* Станция отправления */}
                    <StationSelector
                        label={'Станция отправления '}
                        name='startStation'
                        value={filters.startStation}
                        placeholder={'Любая'}
                        onChange={handleFiltersChange}
                    />
                    {/* Станция назначения */}
                    <StationSelector
                        label={'Станция назначения '}
                        name='endStation'
                        value={filters.endStation}
                        placeholder={'Любая'}
                        onChange={handleFiltersChange}
                    />
                    {/* Выбор дат заявки */}
                    <div>
                        <p>Выбор даты</p>
                        <Calendar
                            minDetail={'month'}
                            selectRange={true}
                            value={date}
                            onChange={setDate}
                        />
                    </div>
                    {/* Выбор времени */}
                    <div className={classes.time__wrapper}>
                        <div>
                            <label htmlFor={'startTime'}>От</label>
                            <input
                                id={'startTime'}
                                type={"time"}
                                name={'startTime'}
                                onChange={handleFiltersChange}
                                value={filters.startTime}
                                className={classes.input__time}
                            />
                        </div>
                        <div>
                            <label>До</label>
                            <input
                                type={"time"}
                                name={'endTime'}
                                onChange={handleFiltersChange}
                                value={filters.endTime}
                                className={classes.input__time}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
