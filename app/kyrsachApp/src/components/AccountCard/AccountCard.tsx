import classes from './accountCard.module.css'

export const AccountCard = () => {
    return (
        <div className={classes.accountCardWrapper}>
            <div className={classes.accountImageWrapper}></div>
            <div className={classes.accountInfoWrapper}>
                <p className={classes.usernameWrapper}>Nikita</p>
                <div className={classes.userInfo}>
                    <div className={classes.inputAccountWrapper}>
                        <label htmlFor="accountEmail">Email:</label>
                        <input
                            disabled={true}
                            className={classes.editInput}
                            type='text' id='accountEmail'
                            placeholder='nikita456niita@yandex.ru'/>
                        <button className={classes.editBtn}>Edit</button>
                    </div>
                    <div className={classes.inputAccountWrapper}>
                        <label htmlFor="accountPassword">Password:</label>
                        <input
                            disabled={true}
                            className={classes.editInput}
                            type='text' id='accountPassword'
                            placeholder='********'/>
                        <button className={classes.editBtn}>Edit</button>
                    </div>
                </div>
                <div className={classes.btnWrapper}>
                    <button className={classes.leaveBtn}>Leave</button>
                </div>
            </div>
        </div>
    )
}
