import React from 'react'
import { TextField, FormControl, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import PropTypes from 'prop-types'

const helperConfig = {
    sx: {
        color: 'error.main',
    },
}

const PasswordField = ({ config }) => {
    const [hidden, setHidden] = React.useState(true)

    return (
        <FormControl style={{ position: 'relative' }}>
            <TextField
                FormHelperTextProps={helperConfig}
                variant="standard"
                type={hidden ? 'password' : 'text'}
                error={!!config.helperText}
                {...config}
            />
            {
                (config.value.length !== 0) &&
                <span style={{ position: 'absolute', right: 0, top: 0 }}>
                    <IconButton onClick={() => setHidden(hidden ? false : true)}>
                        {
                            hidden ? <VisibilityOff /> : <Visibility />
                        }
                    </IconButton>
                </span>
            }
        </FormControl>
    )
}

PasswordField.propTypes = {
    config: PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        helperText: PropTypes.string,
    }),
}

export default PasswordField