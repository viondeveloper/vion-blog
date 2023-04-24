import React, { FC } from "react";
import classes from './footer.module.scss'

const Footer: FC = () => {
    return <div className={classes.Container}>
        <div className={classes.footer}>
            <div className={classes.wrapRow}>
                <div className={classes.itemLeft}></div>
                <div className={classes.itemRight}></div>
            </div>
        </div>
    </div>
}

export default Footer;