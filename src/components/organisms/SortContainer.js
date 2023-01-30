import React from 'react'
import { Box, Stack, Paper, Slide } from '@mui/material'
import SortContainerProps from 'proptypes/organisms/SortContainerProps'

const boxStyle = {
    overflow: 'hidden',
    position: 'absolute',
    top: '100%',
    width: '100%',
    height: '200%',
}

const stackStyle = {
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: 1,
    marginTop: 1,
    borderRadius: 3,
    boxShadow: 3,
}

const SortContainer = ({ isVisible, children }) => {
    const [panelTarget, setPanelTarget] = React.useState(null)

    return (
        <Box onLoad={Event => setPanelTarget(Event.target)} sx={boxStyle}>
            <Slide
                container={panelTarget}
                in={isVisible}
                direction="down"
            >
                <Stack
                    sx={stackStyle}
                    component={Paper}
                    direction="row"
                    spacing={1}
                >
                    {children}
                </Stack>
            </Slide>
        </Box>
    )
}

SortContainer.propTypes = SortContainerProps

export default SortContainer