import classes from './styles.module.css'
import {useEffect, useState} from "react";
import 'react-calendar/dist/Calendar.css';
import {Link, useParams} from "react-router-dom";
import {requests} from "../../datasets/requests";
import Clock from "../../components/Clock";
import UserBlock from "../../components/UserBlock";
import RequestsList from "../../components/RequestsList";
import Button from "../../components/Button";
import InputText from "../../components/InputText";

function MainPage() {
    const {id} = useParams()

    const [passenger, setPassenger] = useState({
        name: '',
        phoneNumber: '',
        requests: [],
    })

    const [changeMode, setChangeMode] = useState(false)

    const [changedData, setChangedData] = useState({
        name: '',
        phoneNumber: ''
    })

    const getPassenger = () => {
        setPassenger({
            name: 'Стрижевский Филипп Александрович',
            phoneNumber: '+7(916)494-12-21',
            requests: requests
        })

        setChangedData({
            name: 'Стрижевский Филипп Александрович',
            phoneNumber: '+7(916)494-12-21'
        })
    }

    const handleChangeButton = (e) => {
        e.preventDefault()
        setChangeMode(true)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            getPassenger()
        }, 1000); // Задержка на 1000 миллисекунд (1 секунда)

        return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
    }, []);

    const handlePassengerChange = ({currentTarget: input}) => {
        setPassenger({...passenger, [input.name]: input.value})
    }

    const handleChangedDataChange = ({currentTarget: input}) => {
        setChangedData({...passenger, [input.name]: input.value})
    }

    const handleChangeSubmit = (e) => {
        e.preventDefault()
        setPassenger(
            {
                ...passenger,
                name: changedData.name,
                phoneNumber: changedData.phoneNumber
            })
        setChangeMode(false)
    }

    const handleChangeCancel = (e) => {
        e.preventDefault()
        setChangedData({
            name: passenger.name,
            phoneNumber: passenger.phoneNumber
        })
        setChangeMode(false)
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
                {
                    changeMode === false ?
                        <>
                            <p>Имя:</p>
                            <p>{passenger.name}</p>
                            <p>Номер телефона:</p>
                            <p>{passenger.phoneNumber}</p>
                            <Button onClick={handleChangeButton}>Изменить</Button>
                        </>
                        :
                        <div className={classes.change__wrapper}>
                            <div className={classes.input__name__wrapper}>
                                <InputText
                                    label={'Имя'}
                                    placeholder={'ФИО'}
                                    name={'name'}
                                    value={changedData.name}
                                    onChange={handleChangedDataChange}
                                />
                            </div>
                            <div className={classes.input__phone__wrapper}>
                                <InputText
                                    label={'Номер Телефона'}
                                    placeholder={'ФИО'}
                                    name={'phoneNumber'}
                                    value={changedData.phoneNumber}
                                    onChange={handleChangedDataChange}
                                />
                            </div>
                            <div className={classes.button__wrapper}>
                                <Button onClick={handleChangeSubmit}>Сохранить</Button>
                            </div>
                            <div className={classes.button__wrapper}>
                                <Button onClick={handleChangeCancel}>Отмена</Button>
                            </div>
                        </div>
                }
            </div>
            <p className={'bold__text'}>История заявок</p>
            <div className={classes.list__wrapper}>
                <RequestsList requests={requests}/>
            </div>

        </div>
    );
}

export default MainPage;
