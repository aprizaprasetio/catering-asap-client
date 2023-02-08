const currency = Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
})

const formatIDR = price => currency.format(price)

const formatQuantity = (price, quantity) => price * quantity

export {
    formatIDR,
    formatQuantity
}