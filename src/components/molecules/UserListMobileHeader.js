import React from 'react'
import { Box, Typography } from '@mui/material'
import CenterLayout from 'components/templates/CenterLayout'

const UserListMobileHeader = ({ name1, name2 }) => {
    const center = {
        display: {
            xs: 'none',
            lg: 'flex'
        }
    }
    return (
        <Box
            sx={{
                // height: {
                //     xs: 150,
                //     lg: 120
                // },

                // position: 'relative',

            }}
        >
            <Box sx={{
                paddingX: 3,
                paddingTop: 6,
                paddingBottom: 8,
                backgroundColor: 'primary.dark',
                // bottom: '40%',
                // position: 'relative',
                // paddingLeft: '8%',
                // marginLeft: {
                //     sm: 100
                // },


            }}>
                <Typography
                    sx={{
                        fontSize: {
                            xs: 20,
                            lg: 30,
                        },
                        marginX: {
                            xs: 'auto',
                            md: 14,
                            sm: 14,
                            lg: 14
                        },
                        fontWeight: 'bold',
                        color: 'white',

                    }}
                    variant="h1"
                >
                    {name1}
                </Typography>
                <Typography sx={{
                    fontSize: {
                        xs: 15,
                        lg: 20
                    },
                    marginX: {
                        xs: 'auto',
                        md: 14,
                        sm: 14,
                        lg: 14
                    },
                    color: 'white',
                    fontWeight: 'bold',
                }}
                    variant="subtitle1">{name2}</Typography>
            </Box>
            {/* <CenterLayout admin {...center}> */}

            {/* </CenterLayout> */}
        </Box>
    )
}

export default UserListMobileHeader