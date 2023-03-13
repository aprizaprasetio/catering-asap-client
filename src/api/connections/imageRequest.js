import { axios } from 'api/initiates/queryInitiate'

const fetchImage = async FileName => {
    const image = await axios.get('/Image', {
        params: { FileName },
        responseType: 'blob',
    })

    return image.data
}

export {
    fetchImage,
}