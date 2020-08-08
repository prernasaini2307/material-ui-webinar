import React from 'react'
import Switch from '@material-ui/core/Switch';

export default function CSwitch(props) {
    const {checked, handleChange, }=props;
    return (
        <Switch
            checked={checked}
            onChange={handleChange}
        />
    )
}
