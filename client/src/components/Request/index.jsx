import classes from './styles.module.css'
import {useState} from "react";
import {Link} from "react-router-dom";
import Button from "../Button";

function Request({request}) {
    const [isOpen, setIsOpen] = useState(false)
    const handleRequestClick = (e) => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <div className={classes.request__wrapper}>
            <div
                className={classes.request}
                onClick={handleRequestClick}
            >
                <p>{request.id}</p>
                <p>{request.status}</p>
                <p>Стрижевский Ф.А.</p>
                <p>{request.cat_pas}</p>
                <p>{`М:${request.INSP_SEX_M} Ж:${request.INSP_SEX_F}`}</p>
                <p>{request.datetime}</p>
                <p>маршрут маршрут маршрут маршрут маршрут маршрут маршрут</p>
                <p>{request.tpz}</p>
            </div>
            {isOpen &&
                <div>
                    <div className={classes.request__info__wrapper}>
                        {/* Общая информация */}
                        <div>
                            <label className={'bold__text'}>Общее</label>
                            <div className={classes.block__info__wrapper}>
                                <p>Номер заявки:</p>
                                <p>{request.id}</p>
                                <p>Статус заявки:</p>
                                <p>{request.status}</p>
                            </div>
                        </div>

                        {/* Информация о пассажире */}
                        <div>
                            <label className={'bold__text'}>Пассажир</label>
                            <div className={classes.block__info__wrapper}>
                                <p>Имя:</p>
                                <Link to={`/passenger/${request.id_pas}`}>Стрижевский Филипп Александрович</Link>
                                <p>Телефон:</p>
                                <p>+7(915)-494-38-23</p>
                                <p>Категория:</p>
                                <p>{request.cat_pas}</p>
                            </div>
                        </div>

                        {/* Дата и время */}
                        <div>
                            <label className={'bold__text'}>Дата и время</label>
                            <div className={classes.block__info__wrapper}>
                                <p>Регистрация:</p>
                                <p>{request.tpz}</p>
                                <p>Запланированное начало: </p>
                                <p>{request.datetime}</p>
                                <p>Начало сопровождения:</p>
                                <p>{request.time3}</p>
                                <p>Завершение сопровождения:</p>
                                <p>{request.time4}</p>
                            </div>
                        </div>

                        {/* Сотрудники */}
                        <div>
                            <label className={'bold__text'}>Сотрудникик</label>
                            <ol className={classes.staff__list}>
                                <li><Link to={`/staff/123`}>Стрижевский Филипп Александрович</Link></li>
                                <li><Link to={`/staff/123`}>Стрижевский Филипп Александрович</Link></li>
                                <li><Link to={`/staff/123`}>Стрижевский Филипп Александрович</Link></li>
                            </ol>
                        </div>
                    </div>

                    <div className={classes.request__info__wrapper}>
                        <div>
                            <label className={'bold__text'}>Маршрут</label>
                            <p>маршрут маршрут маршрут маршрут маршрут маршрут маршрут маршрут маршрут маршрут</p>
                        </div>
                        <div><Button>Изменить</Button></div>
                    </div>
                </div>
            }
        </div>

    );
}

export default Request;