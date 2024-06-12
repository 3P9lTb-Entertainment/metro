import classes from './styles.module.css'
import Request from "../Request";

function RequestsList({requests}) {
    const handleRequestClick = (e) => {

    }

    return (
        <div>
            <div className={classes.requests__headers}>
                <p>Номер</p>
                <p>Статус</p>
                <p>Пассажир</p>
                <p>Категория</p>
                <p>Сотрудники</p>
                <p>Дата и время начала заявки</p>
                <p>Маршрут</p>
                <p>Вреия регистрации заявки</p>
            </div>

            <div className={classes.list__wrapper}>
                {requests.map(request => (
                    <Request request={request}/>
                ))}
            </div>
        </div>

    );
}

export default RequestsList;