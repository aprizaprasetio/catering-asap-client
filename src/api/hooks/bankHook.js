import { useEffect } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { client } from 'api/initiates/queryInitiate'
import { fetchBankByToken, fetchBankAdd, fetchBankEdit, fetchBankRemove } from 'api/connections/bankRequest'

const useBankList = () => {
    const banks = useQuery({
        queryKey: ['bankCollections'],
        queryFn: fetchBankByToken,
    })

    useEffect(() => banks.remove, [])

    return banks
}

const useBankAdd = () => {
    const bankMutation = useMutation({
        mutationFn: fetchBankAdd,
        onSuccess: () => client.refetchQueries({
            queryKey: ['bankCollections'],
        }),
    })

    return bankMutation
}

const useBankEdit = () => {
    const bankMutation = useMutation({
        mutationFn: fetchBankEdit,
        onSuccess: () => client.refetchQueries({
            queryKey: ['bankCollections'],
        }),
    })

    return bankMutation
}

const useBankRemove = () => {
    const bankMutation = useMutation({
        mutationFn: fetchBankRemove,
        onSuccess: () => client.refetchQueries({
            queryKey: ['bankCollections'],
        }),
    })

    return bankMutation
}

export {
    useBankList,
    useBankAdd,
    useBankEdit,
    useBankRemove,
}