import { useState, useEffect } from 'react'
import useCheckoutStore from 'factory/store/useCheckoutStore'

const imageToBase64 = file => (new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
}))

const useImage = () => {
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState(null)
    // const [image, setImage] = useState(null)
    const { image, setImage } = useCheckoutStore()

    useEffect(() => {
        if (!file) {
            setFile(null)
            setFileName(null)
            setImage(null)
            return
        }

        const imageConverse = async () => await imageToBase64(file)

        imageConverse()
            .then(result => setImage({
                binary: result,
                file,
                fileName,
            }))
    }, [file])

    const imageHandler = Event => {
        setFile(Event.target.files[0])
        setFileName(Event.target.files[0].name)
    }

    return [
        image,
        imageHandler,
        {
            fileName,
        },
    ]
}

export {
    useImage,
}