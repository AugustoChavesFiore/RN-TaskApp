import { View, Text } from 'react-native'
import React from 'react'

import RegisterForm from '../components/RegisterForm'
import FormLayout from '../layout/FormLayout'

export default function RegisterScreen() {
    return (
        <FormLayout title="Register">
            <RegisterForm />
        </FormLayout>
    )
}