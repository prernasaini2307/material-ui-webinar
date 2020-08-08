import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

export default function CInputAdornment(props) {
    const { value, onChange, startAdornment, endAdornment, helperText, label } = props;
    return (
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <Input
                startAdornment={<InputAdornment position="start">{startAdornment}</InputAdornment>}
                value={value}
                onChange={onChange}
                endAdornment={<InputAdornment position="end">{endAdornment}</InputAdornment>}
            />
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    )
}
