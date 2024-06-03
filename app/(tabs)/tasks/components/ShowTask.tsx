import { useState } from 'react';


import { Modal, View } from 'react-native'
import { Button, Portal, Text} from 'react-native-paper'
import { Task } from '../types/task.types'
import { useTaskContext } from '../context/TaskContext'
const { removeTask, toggleTask, upDateTask } = useTaskContext();

const [visible, setVisible] = useState(false);

const deleteTask = (task: Task) => removeTask(task);
const completeTask = (task: Task) => toggleTask(task);
const editTask = (task: Task) => upDateTask(task);



export  function ShowTask({task}: {task: Task}) {
    return (
        <View >
            <Text>{task.title}</Text>
            <Text>{task.description}</Text>
            <Text>{task.date}</Text>
            <Portal>
                    <Modal visible={visible} onDismiss={hideModal}  contentContainerStyle={styles.containerStyle}>
                        <ShowTask task={task} />
                    </Modal>
                </Portal>
            <Text>{task.completed ? 'Completed' : 'Not Completed'}</Text>
            <Button mode='contained'>Edit</Button>
            <Button mode='contained'>Delete</Button>
            <Button mode='contained'>Complete</Button>
        </View>
    )
};
