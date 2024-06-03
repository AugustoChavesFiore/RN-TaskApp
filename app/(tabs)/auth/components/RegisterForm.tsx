import { View } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { Button, HelperText, TextInput, Text } from 'react-native-paper'
import { ScaledSheet } from 'react-native-size-matters'
import { useContext, useState } from 'react';
import { Link } from 'expo-router';



type FormData = {
  fullName: string,
  email: string
  password: string
  confirmPassword: string
};

export default function RegisterForm() {

  const [passwordVisible, setPasswordVisible] = useState(false);

  const { control, handleSubmit, formState: { errors }, watch } = useForm<FormData>(
    { defaultValues: { email: "", password: "" } }
  );
  const onSubmit = (data: FormData) => {
    alert("Register successful");
  };
  
  return (
    <View style={styles.containerStyle}>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputStyle}
            mode='outlined'
            label={"Full Name"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            right={<TextInput.Icon icon={'account'} />}

          />
        )}
        name="fullName"
        rules={{
          required: "Full Name is required",
        }}
      />
      {errors.fullName && (
        <HelperText type='error'>{errors.fullName.message}</HelperText>
      )}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputStyle}
            mode='outlined'
            label={"Email"}
            onBlur={onBlur}
            onChangeText={onChange}
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
            message:"The password must contain at least one lowercase letter, one uppercase letter, one number, and one special character. It must be between 5 and 15 characters long."
          }
        }}
      />
      {errors.password && (
        <HelperText type='error' >{errors.password.message} </HelperText>
      )}

        <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputStyle}
            mode='outlined'
            label={"Confirm Password"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            right={
              <TextInput.Icon icon={passwordVisible ? 'eye-off' : 'eye'} onPress={() => setPasswordVisible(!passwordVisible)}
              />}
            secureTextEntry={!passwordVisible}
          />
        )}
        name="confirmPassword"
        rules={{
          required: "Confirm Password is required",
          validate: value => value === watch("password") || "Passwords do not match"
        }}
      />
 
      {errors.confirmPassword && (
        <HelperText type='error' >{errors.confirmPassword.message} </HelperText>
      )}


      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Submit
      </Button>

      <Link href={'/auth'}>
        <Text>Already have an account? Login</Text>
      </Link>
    </View>
  )
};


const styles = ScaledSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  inputStyle: {
    minWidth: 200
  }



});