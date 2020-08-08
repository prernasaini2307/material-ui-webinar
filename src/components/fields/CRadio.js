import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function CRadio(props) {
    const {label, value, handleChange, list} =props;
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup value={value} onChange={handleChange}>
                {
                    list.map(option =>(
                        <FormControlLabel value={option.value} disabled={option.disabled} control={<Radio />} label={option.value} />
                    ))
                }
            </RadioGroup>
        </FormControl>
    )
}
