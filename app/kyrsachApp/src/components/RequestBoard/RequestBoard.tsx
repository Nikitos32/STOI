import classes from "./requestBoard.module.css";
import {Piece} from "../Order_Req/Piece";

export const RequestBoard = () => {
    return (
        <div className={classes.requestsBoard}>
            <p className={classes.titleReq}>Requests</p>
            <div className={classes.wrapperReq}>
              <Piece id={1} descr='Уборка офиса площадью 200 квадратных метров' price='200 BYN'/>
                <Piece id={2} descr=' Генеральная уборка жилого дома (3 спальни, гостиная, кухня)' price='250 BYN'/>
                <Piece id={3} descr='Уборка детского сада (игровые комнаты, спальни, столовые)' price='400 BYN'/>
                <Piece id={4} descr=' Мойка окон в офисном здании' price='600 BYN'/>
                <Piece id={5} descr='Химчистка ковров в гостиничных номерах (50 номеров)' price='800 BYN'/>
            </div>
        </div>
    )
}
