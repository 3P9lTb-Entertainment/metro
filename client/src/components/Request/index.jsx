import classes from './styles.module.css'
import {useState} from "react";
import {Link} from "react-router-dom";

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
                <div className={classes.request__info__wrapper}>
                    {/* Общая информация */}
                    <div>
                        <label className={'bold__text'}>Общее</label>
                        <div className={classes.block__info__wrapper}>
                            <div className={classes.block__info}>
                                <p>Номер заявки:</p>
                                <p>Статус заявки:</p>
                            </div>
                            <div className={classes.block__info}>
                                <p>{request.id}</p>
                                <p>{request.status}</p>
                            </div>
                        </div>
                    </div>

                    {/* Информация о пассажире */}
                    <div>
                        <label className={'bold__text'}>Пассажир</label>
                        <div className={classes.block__info__wrapper}>
                            <div className={classes.block__info}>
                                <p>Имя:</p>
                                <p>Телефон:</p>
                                <p>Категория:</p>
                            </div>
                            <div className={classes.block__info}>
                                <Link to={`/passenger/${request.id_pas}`}><p>Стрижевский Филипп Александрович</p></Link>
                                <p>+7(915)-494-38-23</p>
                                <p>{request.cat_pas}</p>
                            </div>
                        </div>
                    </div>

                    {/* Дата и время */}
                    <div>
                        <label className={'bold__text'}>Дата и время</label>
                        <div className={classes.block__info__wrapper}>
                            <div className={classes.block__info}>
                                <p>Регистрация:</p>
                                <p>Запланированное начало: </p>
                                <p>Начало сопровождения:</p>
                                <p>Завершение сопровождения:</p>
                            </div>
                            <div className={classes.block__info}>
                                <p>{request.tpz}</p>
                                <p>{request.datetime}</p>
                                <p>{request.time3}</p>
                                <p>{request.time4}</p>
                            </div>
                        </div>
                    </div>

                    {/* Сотрудники */}
                    <div>
                        <label className={'bold__text'}>Сотрудникик</label>
                        <ul className={classes.staff__list}>
                            <li><Link to={`/staff/123`}>Стрижевский Филипп Александрович</Link></li>
                            <li><Link to={`/staff/123`}>Стрижевский Филипп Александрович</Link></li>
                            <li><Link to={`/staff/123`}>Стрижевский Филипп Александрович</Link></li>
                        </ul>
                    </div>
                </div>
            }
        </div>

    );
}

export default Request;