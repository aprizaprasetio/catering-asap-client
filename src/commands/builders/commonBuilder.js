import { useState } from 'react'

// Simple boolean reflection function from true to false or false to true
const useTrigger = (initial = false) => {
    const [value, setValue] = useState(initial)
    const valueTrigger = () => setValue(current => !current)
    return [value, valueTrigger]
}

export {
    useTrigger
}