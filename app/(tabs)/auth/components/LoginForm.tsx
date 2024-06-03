import { View } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { Button, HelperText, TextInput, Text } from 'react-native-paper'
import { ScaledSheet } from 'react-native-size-matters'
import { useState } from 'react';
import { Link, router } from 'expo-router';
import { useAuthContext } from '../context/AuthContext';

type FormData = {
    email: string
    password: string
};

export default function LoginForm() {
    const { login } = useAuthContext()!;
    const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>(
        { defaultValues: { email: "test@test.com", password: "Abc123@" } }
    );

    const onSubmit = (data: FormData) => {
        const user = login(data);
        if (user) {
            console.log(user);
            router.replace('/tasks');
            reset();
        } else {
            alert("Login failed");

        };
    };
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <View style={styles.containerStyle}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.inputStyle}
                        mode='outlined'
                        label={"Email"}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        defaultValue={value}
                        value={value}
                        right={<TextInput.Icon icon={'email'} />}

                    />
                )}
                name="email"
                rules={{
                    required: "Email is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address"
                    }
                }}
            />
            {errors.email && (
                <HelperText type='error'>{errors.email.message}</HelperText>
            )}


            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.inputStyle}
                        mode='outlined'
                        label={"Password"}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        defaultValue={value}
                        value={value}
                        right={
                            <TextInput.Icon icon={passwordVisible ? 'eye-off' : 'eye'} onPress={() => setPasswordVisible(!passwordVisible)}
                            />}
                        secureTextEntry={!passwordVisible}
                    />
                )}
                name="password"
                rules={{
                    required: "Password is required",
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.])[A-Za-z\d$@$!%*?&]{5,15}/,
                        message: "La contraseña debe tener al menos 5 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
                    }
                }}
            />
            {errors.password && (
                <HelperText type='error' >{errors.password.message} </HelperText>
            )}

            <Button  mode="contained" onPress={handleSubmit(onSubmit)}>
                Submit
            </Button>
            <Link href={'auth/screen/RegisterScreen'}>
                <Text style={styles.HelperTextStyle}>Register</Text>
            </Link>


        </View>
    )
}

const styles = ScaledSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        width: '100%',
    },
    HelperTextStyle: {
        flexWrap: 'wrap',
        textAlign: 'center',
        flexShrink: 1,
    },
    inputStyle: {
        minWidth: 200,
    },

});