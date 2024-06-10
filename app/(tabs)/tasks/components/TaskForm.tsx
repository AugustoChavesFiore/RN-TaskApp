

import React, { useEffect, useState } from 'react'
import { View,  } from 'react-native'
import {  TextInput, HelperText, Button } from 'react-native-paper'
import { useTaskContext } from '../context/TaskContext'
import { Controller, useForm } from 'react-hook-form';
import { Task } from '../types/task.types';
import { ScaledSheet } from 'react-native-size-matters';
import {  Stack, router, useLocalSearchParams } from 'expo-router';

export default function TaskForm() {
  const { addTask, findTask, upDateTask  } = useTaskContext();

   const {taskID} = useLocalSearchParams()
   
    useEffect(() => {
      if (taskID) {
        const task = findTask(+taskID);
        if (task) {
          reset(task);
        };
      }
    }, [taskID]);





  const { control, handleSubmit, formState: { errors }, reset } = useForm<Task>(
    { defaultValues: {
      title: "" ,
      description: "",
      author: ""
    } }
  );

  const onSubmit = (data: Task) => {
   if(taskID){
      upDateTask(data);   
  }
  else{
    addTask(data);
  }
    router.navigate({pathname: '/tasks'});
  };

  return (
    <View style={styles.containerStyle}>
      <Stack.Screen options={
        {title: taskID?'Update Task':'Add Task',
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
            defaultValue={value}
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
            defaultValue={value}
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
            defaultValue={value}
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



      <Button mode='contained' onPress={handleSubmit(onSubmit)}>{taskID?'Update':'Add task'}</Button>

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