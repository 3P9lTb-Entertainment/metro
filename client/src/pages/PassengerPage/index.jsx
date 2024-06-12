import classes from './styles.module.css'
import {useEffect, useState} from "react";
import 'react-calendar/dist/Calendar.css';
import {Link, useParams} from "react-router-dom";
import {requests} from "../../datasets/requests";
import Clock from "../../components/Clock";
import UserBlock from "../../components/UserBlock";
import RequestsList from "../../components/RequestsList";

function MainPage() {
    const {id} = useParams()

    const [passenger, setPassenger] = useState({
        name: '',
        phoneNumber: '',
        requests: [],
    })

    const getPassenger = () => {
        setPassenger({
            name: 'Стрижевский Филипп Александрович',
            phoneNumber: '+7(916)494-12-21',
            requests: requests
        });
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            getPassenger()
        }, 1000); // Задержка на 1000 миллисекунд (1 секунда)

        return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
    }, []);

    const handleFiltersChange = ({currentTarget: input}) => {
        setPassenger({...passenger, [input.name]: input.value})
    }

    return (
        <div className={classes.page__wrapper}>
            <header className={classes.header__wrapper}>
                <Link to={'/main'}>К заявкам</Link>
                <div className={classes.user__wrapper}>
                    <Clock/>
                    <UserBlock/>
                </div>
            </header>
            <p className={classes.page__label}>{`Информация о папасажире №${id}`}</p>
            <p className={'bold__text'}>Общая информация</p>
            <div className={classes.base__info__wrapper}>
                <p>Имя:</p>
                <p>{passenger.name}</p>
                <p>Номер телефона:</p>
                <p>{passenger.phoneNumber}</p>
            </div>
            <p className={'bold__text'}>История заявок</p>
            <div className={classes.list__wrapper}>
                <RequestsList requests={requests}/>
            </div>

        </div>
    );
}

export default MainPage;
