import { useState } from 'react'

// Simple boolean reflection function from true to false or false to true
const useTrigger = (initial = false) => {
    const [value, setValue] = useState(initial)
    const valueTrigger = () => setValue(current => !current)
    return [value, valueTrigger, setValue]
}

// Simple stateful controlled component
const useInput = (initial = '') => {
    const [value, setValue] = useState(initial)
    const valueChange = Event => setValue(Event.target.value)
    const valueClear = () => setValue('')
    return [value, valueChange, valueClear]
}

export {
    useTrigger,
    useInput,
}