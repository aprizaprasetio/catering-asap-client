import React from 'react'
import { Button, Dialog, DialogContent } from '@mui/material'

const PopUp = ({ openPopup, setOpenPopup, children }) => {
    return (
        <Dialog open={openPopup}>
            <Button onClick={setOpenPopup}>Close</Button>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default PopUp