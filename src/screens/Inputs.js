import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CInput from '../components/fields/CInput';
import CInputAdornment from '../components/fields/CInputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CPassword from '../components/fields/CPassword';
import CSelect from '../components/fields/CSelect';
import CRadio from '../components/fields/CRadio';
import CSwitch from '../components/fields/CSwitch';
import CCheckbox from '../components/fields/CCheckbox';
import CButton from '../components/fields/CButton';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            // width: '25ch',
        },
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <CInput label="Standard" />
            <CInput label="Filled" variant="filled" />
            <CInput label="Outlined" variant="outlined" />
            <CInput
                label="Email"
                error={true}
                helperText="Please enter valid email"
                multiline={true}
            />
            <br />
            <br />
            {/* <h2>Input Adornment</h2>
            <CInputAdornment
                label="Input Adornment"
                startAdornment="Kg"
            />
            <CInputAdornment
                label="Name"
                endAdornment={<AccountCircle />}
            />
            <CPassword />
            <br /> */}
            <br />
            <h2>Select</h2>
            <CSelect
                label="Gender"
                list={[
                    { id: 1, label: "Male", value: "Male" },
                    { id: 2, label: "Female", value: "Female" },
                    { id: 3, label: "Other", value: "Other" }
                ]}
            />
            <br />
            <br />
            <h2>Radio</h2>
            <CRadio
                label="Gender"
                list={[
                    { id: 1, label: "Male", value: "Male" },
                    { id: 2, label: "Female", value: "Female" },
                    { id: 3, label: "Other", value: "Other" }
                ]}
            />
            <br />
            <br />
            <h2>Checkbox</h2>
            <CRadio
                label="Gender"
                list={[
                    { id: 1, label: "Male", value: "Male" },
                    { id: 2, label: "Female", value: "Female" },
                    { id: 3, label: "Other", value: "Other" }
                ]}
            />
            <br />
            <br />
            <h2>Checkbox</h2>
            <CCheckbox
                label="Gender"
                list={[
                    { id: 1, label: "Male", value: "Male" },
                    { id: 2, label: "Female", value: "Female" },
                    { id: 3, label: "Other", value: "Other" }
                ]}
            />
            <br />
            <br />
            <h2>Buttons</h2>
            <CButton
                text="Contained Button"
                variant="contained"
                color="secondary"
            />
            <CButton
                text="Outlined Button"
                variant="outlined"
                color="primary" 
            />
        </form>
    );
}
