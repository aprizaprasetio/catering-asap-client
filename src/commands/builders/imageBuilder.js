import { useState, useEffect } from 'react'

const imageToBase64 = file => (new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
}))

const useImage = (setInitial = null) => {
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState(null)
    const [fileError, setFileError] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        if (!setInitial) return

        setInitial(image)
    }, [image])

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
        const allowedExtension = [
            'image/jpg', 'image/png', 'image/jpeg', 'image/webp',
        ]

        const isForhibiddenExtension = allowedExtension.includes(Event.target.files[0].type) === false
        const isMoreThan2Mb = Event.target.files[0].size > 2097152

        if (isForhibiddenExtension)
            return setFileError('Avatar harus berekstensi JPG, JPEG, PNG, atau WEBP')

        if (isMoreThan2Mb)
            return setFileError('Avatar harus berukuran di bawah 2MB')

        setFile(Event.target.files[0])
        setFileName(Event.target.files[0].name)
        setFileError(null)
    }

    return [
        image,
        imageHandler,
        {
            fileError,
            fileName,
            file,
        },
    ]
}

export {
    imageToBase64,
    useImage,
}