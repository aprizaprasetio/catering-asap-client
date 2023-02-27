import { axios } from 'api/initiates/queryInitiate'

const fetchBankByToken = async () => {
    const banks = await axios.get('BankAccounts')
    const { status, ...res } = banks.data
    return res
}

const fetchBankAdd = async bank => {
    const bankRes = await axios.post('BankAccounts', {
        token: axios.defaults.headers.Authorization,
        ...bank,
    })
    return bankRes.data
}

const fetchBankEdit = async bank => {
    const bankRes = await axios.put('BankAccounts', {
        token: axios.defaults.headers.Authorization,
        ...bank,
    })
    return bankRes.data
}

const fetchBankRemove = async id => {
    await axios.delete('BankAccounts', {
        params: { id },
    })
}

export {
    fetchBankByToken,
    fetchBankAdd,
    fetchBankEdit,
    fetchBankRemove,
}