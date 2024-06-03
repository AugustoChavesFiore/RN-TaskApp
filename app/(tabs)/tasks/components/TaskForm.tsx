

import React from 'react'
import { View,  } from 'react-native'
import {  TextInput, HelperText, Button } from 'react-native-paper'
import { useTaskContext } from '../context/TaskContext'
import { Controller, useForm } from 'react-hook-form';
import { Task } from '../types/task.types';
import { ScaledSheet } from 'react-native-size-matters';
import {  Stack } from 'expo-router';

export default function TaskForm() {
  const { addTask  } = useTaskContext();

  const { control, handleSubmit, formState: { errors }, reset } = useForm<Task>(
    { defaultValues: { title: "", description: "", author: "" } }
  );

  const onSubmit = (data: Task) => {
    addTask(data);
    return reset();
  }

  return (
    <View style={styles.containerStyle}>
      <Stack.Screen options={
        {title: 'Add Task',
        headerStyle: {
          backgroundColor: '#464646',
        },
        }
      
      } />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{ width: '100%' }}
            mode='outlined'
            label={"Title"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="title"
        rules={{
          required: "Title is required",
        }}
      />
      {errors.title && (
        <HelperText type='error'>{errors.title.message}</HelperText>
      )}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{ width: '100%' }}
            mode='outlined'
            label={"Description"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
        rules={{
          required: "Description is required",
        }}
      />
      {errors.description && (
        <HelperText type='error'>{errors.description.message}</HelperText>
      )}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{ width: '100%' }}
            mode='outlined'
            label={"Author"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="author"
        rules={{
          required: "Author is required",
        }}
      />
      {errors.author && (
        <HelperText type='error'>{errors.author.message}</HelperText>
      )}



      <Button onPress={handleSubmit(onSubmit)}>Add Task</Button>

    </View>
  )
};

const styles = ScaledSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: '80%',
    padding: '10@s',
    gap: '10@s',
  },
});