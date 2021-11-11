import {Button} from '@mui/material';
import React from 'react';
import "../../../styles/styles.css";

export default function ButtonInput(props){
    const {handleFunc,title,val,btnStyle,icon}=props;

    return <div className="registerTextInputDiv">
        <Button startIcon={icon} size='large' fullWidth className={btnStyle} >
            {title}
        </Button>
    </div>
}