import { Grid, Skeleton } from '@mui/material'
import React from 'react'

const SkeletonListDetail = () => {
    return (
        <>
            <Grid item spacing={1}>
                <Skeleton variant='text' width={300} />
                <Skeleton variant='text' width={200} />
                <Skeleton variant='text' width={200} />
                <Skeleton variant='text' width={100} />
            </Grid>
        </>
    )
}

export default SkeletonListDetail