import React from 'react'
import { Chip } from '@mui/material'
import { ArrowUpward, ArrowDownward } from '@mui/icons-material'
import SortItemProps from 'proptypes/molecules/SortItemProps'

const SortItem = ({ onClick, sortBy, isAsc, checked, onDelete }) => {
    const label = {
        Name: 'Nama',
        Price: 'Harga',
        Date: 'Waktu',
    }
    const isChoosen = sortBy === checked
    const isUpward = isChoosen ? isAsc : true

    return (
        <Chip
            icon={isUpward ? <ArrowUpward /> : <ArrowDownward />}
            label={label[sortBy]}
            variant={isChoosen ? 'filled' : 'outlined'}
            onClick={onClick}
            color="info"
            clickable
            onDelete={isChoosen ? onDelete : undefined}
        />
    )
}

SortItem.propTypes = SortItemProps

export default SortItem