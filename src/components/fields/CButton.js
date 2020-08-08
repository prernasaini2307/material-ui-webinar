import React from 'react'
import Button from '@material-ui/core/Button';

export default function CButton(props) {
    const {text, variant, color}=props;
    return (
        <Button variant={variant} color={color}>
            {text}
        </Button>
    )
}
