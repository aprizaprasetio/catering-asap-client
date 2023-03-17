import { axios } from 'api/initiates/queryInitiate'

const createReaction = async reaction => {
    const dataReaction = await axios.post('/Reviews', reaction)

    return dataReaction.data
}

const updateReaction = async reaction => {
    const dataReaction = await axios.put('/Reviews', reaction)

    return dataReaction.data
}

export {
    createReaction,
    updateReaction
}