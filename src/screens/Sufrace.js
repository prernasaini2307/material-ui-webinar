import React from 'react'
import CAppBar from '../components/surface/appbar/CAppBar'
import AppBarWithMenu from '../components/surface/appbar/AppBarWithMenu'
import BottomAppBar from '../components/surface/appbar/BottomAppBar'
import CAccordion from '../components/surface/appbar/CAccordion'
import CCard from '../components/surface/appbar/CCard'
import CPaper from '../components/surface/appbar/CPaper'
import Box from '@material-ui/core/Box';

export default function Sufrace() {
    return (
        <div>
            <h1>Simple App Bar</h1>
            {/* <CAppBar /> */}
            {/* <h1>App Bar with a primary search field</h1>
            <AppBarWithMenu/> */}
            {/* <h1>Bottom App Bar</h1>
            <BottomAppBar/> */}
            {/* <br/>
            <h1>Card</h1>
            <CCard/> */}
            {/* <h1>Accordion</h1>
            <CAccordion/> */}
            <br />
            <br />
            <CPaper />
            <CPaper elevation={0} />
            <CPaper elevation={13} />
            <CPaper variant="outlined" />
            <CPaper variant="outlined" square />
            <Box color="text.primary" clone>
            <h1>Text</h1>
            </Box>
        </div>
    )
}
