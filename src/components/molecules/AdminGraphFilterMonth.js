import { FormControl, MenuItem, Select } from '@mui/material'
import useGrapStore from 'factory/store/useGrapStore'
import React from 'react'

const AdminGraphFilterMonth = () => {
    const { setFilterBy } = useGrapStore()
    const date = new Date().getMonth() + 1
    const [month, setMonth] = React.useState(date)

    const handleChange = (event) => {
        setMonth(event.target.value)
        setFilterBy(event.target.value)
    }

    React.useEffect(() => {
        console.log(month)
    }, [date])

    return (
        <>
            <FormControl fullWidth>
                <Select
                    value={month}
                    onChange={handleChange}
                    sx={{ height: 40 }}
                >
                    <MenuItem value={1}>Januari</MenuItem>
                    <MenuItem value={2}>Februari</MenuItem>
                    <MenuItem value={3}>Maret</MenuItem>
                    <MenuItem value={4}>April</MenuItem>
                    <MenuItem value={5}>Mei</MenuItem>
                    <MenuItem value={6}>Juni</MenuItem>
                    <MenuItem value={7}>Juli</MenuItem>
                    <MenuItem value={8}>Agustus</MenuItem>
                    <MenuItem value={9}>September</MenuItem>
                    <MenuItem value={10}>Oktober</MenuItem>
                    <MenuItem value={11}>November</MenuItem>
                    <MenuItem value={12}>Desember</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default AdminGraphFilterMonth