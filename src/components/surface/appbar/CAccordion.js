import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function CAccordion(props) {
    const classes = useStyles();
    const {data}=props;
    const list = [{
        name: "Accordion 1",
        content: " sit amet blandit leo lobortis eget."
    }, {
        name: "Accordion 2",
        content: " sit amet blandit leo lobortis eget."
    }]
    return (
        <div className={classes.root}>
            {
                list.map(data => (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>{data.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {data.content}
                            </Typography>
                        </AccordionDetails></Accordion>

                ))

            }
        </div>
    );
}
