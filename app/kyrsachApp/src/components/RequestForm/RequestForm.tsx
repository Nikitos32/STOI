import classes from './requestForm.module.css';
import {FormInput} from "../UI/FormInput/FormInput";

export const RequestForm = () => {
    return (
        <form action="#" className={classes.requestForm}>
            <FormInput type='text' placeholder='Name'/>
            <FormInput type='email' placeholder='Email'/>
            <FormInput type='tel' placeholder='Phone'/>
            <textarea className={classes.textarea} name="comment" id="comment" cols="10" rows="2"
                      placeholder='Leave a comment'></textarea>
            <select name="type" id="type" className={classes.select}>
                <option value="firstOption">Уборка жилых помещений</option>
                <option value="secondOption">Специализированные услуги</option>
                <option value="thirdOption">Уборка офисных помещений</option>
                <option value="fourthOption">Прочее</option>
            </select>
            <button className={classes.formBtn}>Отправить</button>
        </form>
    )
}
