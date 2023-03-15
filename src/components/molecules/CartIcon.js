import React from 'react'
import useSound from 'use-sound'
import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { useCurrentCartQuantity } from 'api/hooks/cartHook'
import NotifSimple from 'sfx/02 Alerts and Notifications/notification_simple-02.ogg'

const CartIcon = () => {
    const quantity = useCurrentCartQuantity()
    const [playNotif, { stop }] = useSound(NotifSimple)
    const [lastQuantity, setLastQuantity] = React.useState(null)

    React.useEffect(() => {
        if (!quantity || lastQuantity) return
        playNotif()
        setLastQuantity(quantity)
        return stop
    }, [quantity])

    return (
        <Badge badgeContent={quantity} color="error">
            <ShoppingCart />
        </Badge>
    )
}

export default CartIcon