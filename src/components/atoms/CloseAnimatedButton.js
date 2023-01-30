import React from 'react'
import { IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useTrigger } from 'commands/builders/commonBuilder'
import CloseAnimatedButtonProps from 'proptypes/atoms/CloseAnimatedButtonProps'

const CloseAnimatedButton = ({ onClick }) => {
    const [closeRotate, closeRotateTrigger] = useTrigger()

    const iconStyle = {
        marginLeft: 1,
        transition: 'all 1s',
        rotate: closeRotate ? '180deg' : '0deg',
        opacity: 0.5,
    }

    return (
        <IconButton
            onClick={() => {
                closeRotateTrigger()
                onClick()
            }}
            sx={iconStyle}
        >
            <Close />
        </IconButton>
    )
}

CloseAnimatedButton.propTypes = CloseAnimatedButtonProps

export default CloseAnimatedButton