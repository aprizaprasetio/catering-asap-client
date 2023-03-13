const isNotImage = file => !file.type.includes('image/')

const isLessThan7Mb = file => file.size > 7340032

export {
    isNotImage,
    isLessThan7Mb,
}