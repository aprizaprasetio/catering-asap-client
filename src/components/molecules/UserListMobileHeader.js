import React from 'react'
import { Box, Typography, AppBar, Toolbar} from '@mui/material'
import CenterLayout from 'components/templates/CenterLayout'
/*
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
*/

const UserListMobileHeader = ({ title, style, style1, menu }) => {
    return (
        <>
            <Box sx={style}>
                <Box sx={style1}>
                    <Typography
                        sx={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'white'
                        }}
                        variant="h1"
                    >
                        {title}
                    </Typography>
                    <Typography sx={{
                        fontSize: 22,
                        color: 'white',
                        fontWeight: 'bold'
                    }}
                        variant="subtitle1">Admin</Typography>
                </Box>
                <Box sx={{ position: 'absolute', bottom: 0 }}>
                </Box>
            </Box>
        </>
    )
}

export default UserListMobileHeader