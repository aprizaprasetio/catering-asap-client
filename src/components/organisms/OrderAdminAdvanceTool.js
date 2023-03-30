import React from 'react'
import { Box, Paper, Stack, Button, Chip, IconButton, Slider, Tooltip, Popper, Grow, Skeleton } from '@mui/material'
import { HourglassBottom, Cached, LocalShipping, Schedule, NavigateBefore, NavigateNext, MoreVert, Close }
    from '@mui/icons-material'
import { useUpdateOrderAdvance } from 'api/hooks/ordersManagementHook'
import { client } from 'api/initiates/queryInitiate'

const statusValue = [
    {
        value: 0,
        label: <HourglassBottom />,
    },
    {
        value: 1,
        label: <Cached />,
        buttonLabel: 'Konfirmasi',
    },
    {
        value: 2,
        label: <LocalShipping />,
        buttonLabel: 'Kirim',
    },
    {
        value: 3,
        label: <Schedule />,
        buttonLabel: 'Selesai',
    },
]

const valueStatusFormat = value => {
    const labelStatus = [
        'Menunggu Verifikasi', 'Sedang Diproses', 'Dalam Perjalanan', 'Selesai', 'Ditolak'
    ]

    return labelStatus[value]
}

const valueColorFormat = value => {
    const colorStatus = {
        '3': 'success',
        '4': 'error',
    }

    return colorStatus[value] ?? 'primary'
}

const rejectIcon = (
    <Tooltip title="Tolak Pesanan" placement="right">
        <Close sx={{
            color: '#d32f2f !important',
            transition: '.33s',
            opacity: '.33',
            ':hover': {
                opacity: '1'
            },
        }} />
    </Tooltip>
)

const SkeletonBox = () => (
    <Paper component={Stack} spacing={3} sx={{
        width: 300,
        padding: 3,
        boxShadow: 1,
        borderRadius: 6,
        marginBottom: 1,
    }}>
        <Box display="flex" gap={1}>
            <Skeleton variant="rounded" height={30} sx={{ flex: 1, borderRadius: 4 }} />
            <Skeleton variant="rounded" height={30} sx={{ flex: 3, borderRadius: 4 }} />
            <Skeleton variant="rounded" height={30} sx={{ flex: 1, borderRadius: 4 }} />
        </Box>
        <Box>
            <Skeleton variant="rounded" width="100%" height={20} sx={{ borderRadius: 4 }} />
            <Stack direction="row" spacing={5} paddingTop={1}>
                {[...Array(4)].map((item, index) => (
                    <Skeleton key={index} variant="rounded" width={30} height={30} sx={{ flex: 1, borderRadius: 4 }} />
                ))}
            </Stack>
        </Box>
        <Box display="flex" gap={1}>
            <Skeleton variant="rounded" height={25} sx={{ flex: 1, borderRadius: 4 }} />
            <Skeleton variant="rounded" height={25} sx={{ flex: 3, borderRadius: 4 }} />
        </Box>
    </Paper >
)

const OrderAdminAdvanceTool = ({ id, status }) => {
    const [statusChange, setStatusChange] = React.useState(status)

    const [isAdvanceMode, setIsAdvanceMode] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null)

    const { mutate, isLoading } = useUpdateOrderAdvance()

    React.useEffect(() => {
        if (status === undefined) return
        setStatusChange(status)
    }, [status])

    const isAdvanceModeTrigger = Event => {
        setAnchorEl(Event.currentTarget);
        setIsAdvanceMode(prev => !prev);
    };

    return (
        <>
            <Button
                onClick={isAdvanceModeTrigger}
                variant="outlined"
                color="info"
                startIcon={isAdvanceMode ? <Close /> : <MoreVert />}
                sx={{ flex: 1, borderRadius: 4 }}
            >
                {isAdvanceMode ? 'Tutup' : 'Lainnya'}
            </Button>
            <Popper open={isAdvanceMode} placement="top" anchorEl={anchorEl}>
                <Grow in={isAdvanceMode}>
                    {(client.isFetching({ queryKey: ['orders'] }) || isLoading) ? (
                        <SkeletonBox />
                    ) : (
                        <Paper component={Stack} spacing={1} width={300} padding={3} sx={{
                            boxShadow: 1,
                            borderRadius: 6,
                            marginBottom: 1,
                        }}>
                            <Box display="flex" height={40}>
                                <IconButton
                                    onClick={() => {
                                        if (status === 4)
                                            return mutate({ id, status: 1 })
                                        if (status === 3)
                                            return
                                        mutate({ id, status: status - 1 })
                                    }}
                                    disabled={status === 0 || status === 3}
                                    sx={{ color: 'gray' }}
                                >
                                    <NavigateBefore />
                                </IconButton>
                                <Chip
                                    variant="outlined"
                                    color={valueColorFormat(status)}
                                    label={valueStatusFormat(status)}
                                    deleteIcon={rejectIcon}
                                    onDelete={(status < 3) ? () => mutate({ id, status: 4 }) : undefined}
                                    sx={{
                                        flex: 1,
                                        height: '100%',
                                        marginX: 1,
                                    }}
                                />
                                <Tooltip
                                    title={(status === 2 && 'Jika pesanan diselesaikan, maka anda tidak dapat mengembalikannya!')}
                                    placement="top"
                                >
                                    <IconButton onClick={() => mutate({ id, status: status + 1 })} color={valueColorFormat(status + 1)} disabled={status >= 3} >
                                        <NavigateNext />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Slider
                                value={statusChange}
                                max={3}
                                valueLabelFormat={valueStatusFormat}
                                valueLabelDisplay="auto"
                                marks={statusValue}
                                disabled={status >= 3}
                                sx={(statusChange === 4) && {
                                    '& .MuiSlider-track': {
                                        color: 'red',
                                    }, '& .MuiSlider-thumb': {
                                        color: 'red'
                                    },
                                }}
                                onChange={(e, val) => setStatusChange(val)}
                            />
                            <Box display="flex" gap={1} paddingTop={6}>
                                <Button
                                    onClick={() => setStatusChange(status)}
                                    variant="contained"
                                    size="small"
                                    color="error"
                                    disabled={statusChange === status}
                                    sx={{
                                        flex: 1,
                                        borderRadius: 4,
                                        opacity: (statusChange === status) ? '0' : '1',
                                        transition: '.33s'
                                    }}
                                >
                                    Batal
                                </Button>
                                <Tooltip title={(statusChange === 3 && 'Jika pesanan diselesaikan, maka anda tidak dapat mengembalikannya!')}>
                                    <Button
                                        onClick={() => mutate({ id, status: statusChange })}
                                        variant="contained"
                                        size="small"
                                        color={valueColorFormat(statusChange)}
                                        disabled={statusChange === status}
                                        sx={{ flex: 1, borderRadius: 4 }}
                                    >
                                        {(statusChange > status) ? (
                                            statusValue[statusChange]?.buttonLabel
                                        ) : 'Mundurkan'}
                                    </Button>
                                </Tooltip>
                            </Box>
                            {/* <Box padding={2} sx={{
                                borderRadius: 4,
                                backgroundColor: 'rgba(323, 57, 57, .33)',
                            }}>
                                <Typography variant="body2" fontWeight="bold" color="#d32f2f">
                                    Perhatian
                                </Typography>
                                <Typography variant="caption" color="#d32f2f">
                                    Jika pesanan diselesaikan, maka anda tidak dapat mengembalikannya!
                                </Typography>
                            </Box> */}
                        </Paper>
                    )
                    }
                </Grow>
            </Popper>
        </>
    )
}

export default OrderAdminAdvanceTool