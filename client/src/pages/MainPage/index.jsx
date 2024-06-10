import classes from './styles.module.css'
import UserBlock from "../../components/UserBlock";
import Clock from "../../components/Clock";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import {useEffect, useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function MainPage() {

    const [filters, setFilters] = useState({
        searchBar: '',
        startStation: '',
        endStation: '',
        date: [new Date(), new Date()]
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
                    <InputText
                        label={'Станция отправления '}
                        name='startStation'
                        value={filters.startStation}
                        placeholder={'Любая'}
                        onChange={handleFiltersChange}
                    />
                    {/* Станция назначения */}
                    <InputText
                        label={'Станция назначения '}
                        name='endStation'
                        value={filters.endStation}
                        placeholder={'Любая'}
                        onChange={handleFiltersChange}
                    />
                    {/* Выбор даты заявки */}
                    <div>
                        <p>Выбор даты</p>
                        <Calendar
                            minDetail={'month'}
                            selectRange={true}
                            value={date}
                            onChange={setDate}
                        />
                    </div>
                </div>


            </div>
        </div>
    );
}

export default MainPage;
