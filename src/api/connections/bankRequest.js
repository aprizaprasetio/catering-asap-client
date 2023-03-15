import { axios } from 'api/initiates/queryInitiate'

const fetchBankByToken = async () => {
    const banks = await axios.get('BankAccounts')
    const { status, ...res } = banks.data
    return res
}

const fetchUsedBankByToken = async () => {
    const banks = await axios.get('BankAccounts/UsedBank')
    return banks.data.data
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

const fetchBankChoose = async id => {
    await axios.put('BankAccounts/Choose', {}, {
        params: { id },
    })
}

const fetchBankRemove = async id => {
    await axios.delete('BankAccounts', {
        params: { id },
    })
}

export {
    fetchBankByToken,
    fetchUsedBankByToken,
    fetchBankAdd,
    fetchBankEdit,
    fetchBankChoose,
    fetchBankRemove,
}