import classes from './styles.module.css'
import UserBlock from "../../components/UserBlock";
import Clock from "../../components/Clock";
import Button from "../../components/Button";

function MainPage() {
    return (
        <div className={classes.page__wrapper}>
            <div className={classes.menu__wrapper}>
                <UserBlock/>
                <Clock/>
                <Button>Адаптивное распределение</Button>
            </div>
        </div>
    );
}

export default MainPage;
