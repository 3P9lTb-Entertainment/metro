import classes from './styles.module.css'
import {useEffect, useState} from "react";
import TextButton from "../TextButton";



function UserBlock() {
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        setUserInfo({
            FIO: "Лосев Антон Сергеевич",
            RANK: "Специалист"
        })
    }, [])

    return (
        <div className={classes.user__wrapper}>
            <div className={classes.top__info__wrapper}>
                <p>{userInfo.FIO}</p>
                <TextButton>Выход</TextButton>
            </div>
            <p className={classes.rank__info}>{userInfo.RANK}</p>
        </div>
    );
}

export default UserBlock;
