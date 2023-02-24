import React from 'react'
import { Dialog, DialogContent, Paper } from '@mui/material'

const PopUp = ({ openPopup, setOpenPopup, children }) => {

    const PaperProps = {
        display: 'flex',
        flexDirection: 'column',
        padding: 3,
        gap: 2,
        borderRadius: 3,
        boxShadow: 3,
        cursor: 'default',
    }

    return (
        <Dialog open={openPopup}  onClose={setOpenPopup} PaperProps={{
            sx: PaperProps
        }}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default PopUp