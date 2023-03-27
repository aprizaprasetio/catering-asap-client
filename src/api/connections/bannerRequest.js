import { axios } from 'api/initiates/queryInitiate'

const createBanner = async banner => {
    const dataBanner = await axios.post('/Banner', {
        token: axios.defaults.headers.Authorization,
        ...banner
    })
    return dataBanner.data
}

const fetchBanner = async () => {
    const dataBanner = await axios.get('/Banner')
    return dataBanner.data.data
}

const deleteBanner = async bannerId => {
    await axios.delete(`/Banner/${bannerId}`, {
        params: { id: bannerId }
    })
}

const fethBannerById = async bannerId => {
    const dataBanner = await axios.get(`/Banner/${bannerId}`, {
        params: { id: bannerId }
    })
    return dataBanner.data
}

export {
    createBanner,
    fetchBanner,
    deleteBanner,
    fethBannerById
}