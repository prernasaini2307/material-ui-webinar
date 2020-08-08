import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export default function CSelect(props) {
    const { label, variant, error, required, list, disabled, type, helperText, value, onChange } = props;
    return (
        <TextField
            select
            label={label}
            variant={variant}
            error={error}
            helperText={helperText}
            required={required}
            disabled={disabled}
            value={value}
            onChange={onChange}
        >
            {list.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    )
}
