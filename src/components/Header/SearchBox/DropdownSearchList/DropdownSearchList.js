import React from 'react'
import classes from './DropdownSearchList.module.scss'

const DropdownSearchList = () => {
    
    const cls = [
        "translate-middle-x",
        classes.DropdownSearchList,
        "position-absolute top-0 start-50 translate-middle-x"
    ]
    
    return (
        <div className={cls.join(" ")}>
    
        </div>
    )
}

export default DropdownSearchList