import React from 'react';
import {ICONS} from './ICONS';

function Icon(props){
    return(
    <svg className={props.children} width="24" height="22" viewBox="0 0 24 24">
    <path d={ICONS[props.children]}></path>
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    </svg>
    )
}

export default Icon;