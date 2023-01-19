import React from 'react'
import { TextField, FormControl, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import PasswordFieldProps from 'proptypes/molecules/PasswordFieldProps'

const helperConfig = {
    sx: {
        color: 'error.main',
    },
}


const PasswordField = ({ config }) => {
    const [hidden, setHidden] = React.useState(true)

    const iconStyle = {
        position: 'absolute',
        right: 0,
        top: (config.helperText) ? 0 : 'auto',
        bottom: (!config.helperText) ? 0 : 'auto',
    }

    return (
        <FormControl style={{ position: 'relative' }}>
            <TextField
                FormHelperTextProps={helperConfig}
                variant="standard"
                type={hidden ? 'password' : 'text'}
                autoComplete="current-password"
                error={!!config.helperText}
                {...config}
            />
            {
                (config.value.length !== 0) &&
                <IconButton component="span" onClick={() => setHidden(hidden ? false : true)} sx={iconStyle}>
                    {
                        hidden ? <VisibilityOff /> : <Visibility />
                    }
                </IconButton>
            }
        </FormControl>
    )
}

PasswordField.propTypes = PasswordFieldProps

export default PasswordField