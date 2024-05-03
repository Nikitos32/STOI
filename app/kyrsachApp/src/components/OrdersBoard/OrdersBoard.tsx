import classes from './ordersBoard.module.css'
import {Piece} from "../Order_Req/Piece";

export const OrdersBoard = () => {
    return (
        <div className={classes.ordersBoard}>
            <p className={classes.titleOrder}>Orders</p>
            <div className={classes.wrapperOrders}>
                <Piece
                    id={1}
                    descr='Уборка квартиры после выселения жильцов (2 спальни, гостиная, ванная комната)'
                    price='200 BYN'/>
                <Piece
                    id={2}
                    descr='Глубокая уборка ресторана перед открытием (включая кухню, залы, санитарные помещения)'
                    price='1000 BYN'/>
                <Piece
                    id={3}
                    descr='Ежедневная уборка спортивного зала (протирка тренажеров, мойка полов, уборка раздевалок)'
                    price='500 BYN'/>
                <Piece
                    id={4}
                    descr='Чистка вентиляционных систем в офисном здании (5 этажей) '
                    price='800 BYN'/>
                <Piece
                    id={5}
                    descr='Уборка гостиничных номеров (протирка поверхностей, смена постельного белья, уборка ванных комнат)'
                    price='600 BYN'/>
            </div>
        </div>
    )
}
