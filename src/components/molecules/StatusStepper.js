import React from 'react'
import { styled } from '@mui/material/styles'
import { stepConnectorClasses } from '@mui/material/StepConnector'
import { Stepper, Step, StepLabel, StepConnector } from '@mui/material'
import { HourglassBottom, Cached, LocalShipping, Done } from '@mui/icons-material'
import StatusStepperProps from 'proptypes/molecules/StatusStepperProps'

const statusList = []
statusList.push({
    enum: 0,
    icon: HourglassBottom,
    label: 'Menunggu Verifikasi',
})
statusList.push({
    enum: 1,
    icon: Cached,
    label: 'Sedang Diproses',
})
statusList.push({
    enum: 2,
    icon: LocalShipping,
    label: 'Dalam Perjalanan',
})
statusList.push({
    enum: 3,
    icon: Done,
    label: 'Selesai',
})

const Connector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#2196f3',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#2196f3',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const StatusStepper = ({ currentStatus }) => {
    return (
        <Stepper activeStep={currentStatus} connector={<Connector />} alternativeLabel>
            {statusList.map(step => (
                <Step key={step.enum}>
                    <StepLabel StepIconComponent={step.icon}>{step.label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

StatusStepper.propTypes = StatusStepperProps

export default StatusStepper