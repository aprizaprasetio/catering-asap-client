import React from 'react'
import { Card, CardContent, CardActions, Button, Snackbar, Alert, Box, Paper, Table, TableHead, TableBody, TableRow, TableCell, Typography, Stack, IconButton, Skeleton } from '@mui/material'
import BankItem from 'components/organisms/BankItem'
import BankItemForm from 'components/organisms/BankItemForm'
import BankAddButton from 'components/organisms/BankAddButton'
import { useBankList, useBankRemove, useBankChoose } from 'api/hooks/bankHook'
import { useTrigger } from 'commands/builders/commonBuilder'

const PrivatePasswordTab = () => {
    const { data, isFetchedAfterMount } = useBankList()
    const { mutate: chooseMutate } = useBankChoose()
    const [formOpen, formOpenTrigger] = useTrigger()

    const [formValue, setFormValue] = React.useState({
        bankName: '',
        bankNumber: '',
        name: '',
    })

    const setValueFromTarget = bankId => {
        const target = data.data.find(item => item.id === bankId)
        setFormValue(target)
    }

    const setValueToEmpty = () => setFormValue({
        bankName: '',
        bankNumber: '',
        name: '',
    })

    const { mutate: removeMutate } = useBankRemove()

    const BankList = (
        <>
            {data?.data?.map(item => <BankItem
                {...item}
                onEdit={() => (setValueFromTarget(item.id), formOpenTrigger())}
                onRemove={() => removeMutate(item.id)}
                onChoose={() => chooseMutate(item.id)}
                key={item.bankNumber}
            />)}
            {!data?.isLimit && <BankAddButton onClick={() => (setValueToEmpty(), formOpenTrigger())} />}
            <BankItemForm
                open={formOpen}
                openTrigger={formOpenTrigger}
                values={formValue}
                type={formValue.name ? 'edit' : 'add'}
            />
        </>
    )

    const SkeletonList = (
        <>
            <Skeleton
                variant="rectangular"
                sx={{
                    width: 400,
                    height: 150,
                    borderRadius: 4,
                }}
            />
            <Skeleton
                variant="rectangular"
                sx={{
                    width: 300,
                    height: 150,
                    borderRadius: 4,
                }}
            />
        </>
    )

    return (
        <Card sx={{
            padding: 3,
            position: 'relative',
            borderRadius: 3,
            boxShadow: 6,
        }}>
            <CardContent>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: {
                        xs: 'column',
                        md: 'row',
                    },
                    gap: 3,
                    alignItems: 'stretch',
                }}>
                    {isFetchedAfterMount ? BankList : SkeletonList}
                </Box>
            </CardContent>
        </Card>
    )
}

export default PrivatePasswordTab