import classes from './styles.module.css'
import UserBlock from "../../components/UserBlock";
import Time from "../../components/Time";

function MainPage() {
    return (
        <div className={classes.page__wrapper}>
            <div className={classes.menu__wrapper}>
                <UserBlock/>
                <Time/>
            </div>
        </div>
    );
}

export default MainPage;
