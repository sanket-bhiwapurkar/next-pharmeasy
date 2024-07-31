import React from 'react'
import { Box, Fab } from '@mui/material'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { palette } from '@/app/constants/styles'

const ClickToScroll = () => {
    return (
        <Box>
            <Box>
                <Fab color='dark'><FaAngleLeft /></Fab>
                <Fab><FaAngleRight /></Fab>
            </Box>
        </Box>
    )
}

export default ClickToScroll