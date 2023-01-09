import React from 'react'
import { Fab, Fade } from '@mui/material'
import { KeyboardArrowUp } from '@mui/icons-material'

const scrollToTop = () => window.scroll({ top: 0, behavior: 'smooth' })

const fabConfig = {
    onClick: scrollToTop,
    size: 'medium',
    sx: {
        position: 'fixed',
        right: 20,
        bottom: 20,
    },
}

const ButtonScrollTop = () => {
    const [isBottom, setIsBottom] = React.useState(false)

    window.onscroll = () => {
        const isTop = window.scrollY === 0
        if (isTop) return setIsBottom(false)
        setIsBottom(true)
    }

    if (isBottom === false) return null

    return (
        <Fade in={isBottom}>
            <Fab {...fabConfig} >
                <KeyboardArrowUp />
            </Fab>
        </Fade>
    )
}

export default ButtonScrollTop