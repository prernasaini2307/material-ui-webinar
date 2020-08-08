import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



export default function CCheckbox(props) {
    const {checked,handleChange,list}=props;
    return (
        <FormGroup row>
            {list.map(option => (
                <FormControlLabel disabled={option.disabled} control={<Checkbox />} label={option.label} />
            ))}
        </FormGroup>
    )
}
