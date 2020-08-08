import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function CInput(props) {
    const { label, variant, error, required, multiline, disabled, type, helperText, value, onChange } = props;
    return (
        <TextField
            label={label}
            variant={variant}
            error={error}
            helperText={helperText}
            required={required}
            disabled={disabled}
            type={type}
            value={value}
            onChange={onChange}
            multiline={multiline}
        />
    )
}
