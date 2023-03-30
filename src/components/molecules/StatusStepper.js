import React from 'react'
import { styled } from '@mui/material/styles'
import { stepConnectorClasses } from '@mui/material/StepConnector'
import { Stepper, Step, StepLabel, StepConnector } from '@mui/material'
import { HourglassBottom, Cached, LocalShipping, Done, Close } from '@mui/icons-material'
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

const valueColorFormat = value => {
    const colorStatus = {
        '3': '#2e7d32',
        '4': '#d32f2f',
    }

    return colorStatus[value] ?? '#1976d2'
}

const Connector = color => {
    const StyledConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 10,
            left: 'calc(-50% + 16px)',
            right: 'calc(50% + 16px)',
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: color,
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: color,
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
            borderTopWidth: 3,
            borderRadius: 1,
        },
    }))
    return <StyledConnector />
}

const StatusStepper = ({ currentStatus }) => {
    return (
        <Stepper activeStep={currentStatus} connector={Connector(valueColorFormat(currentStatus))} alternativeLabel>
            {statusList.map(step => {
                if ((currentStatus === 4) && (step.enum === 3))
                    return (
                        <Step key={step.enum}>
                            <StepLabel StepIconComponent={Close}>Ditolak</StepLabel>
                        </Step>
                    )

                return (
                    <Step key={step.enum}>
                        <StepLabel StepIconComponent={step.icon}>{step.label}</StepLabel>
                    </Step>
                )
            })}
        </Stepper>
    )
}

StatusStepper.propTypes = StatusStepperProps

export default StatusStepper