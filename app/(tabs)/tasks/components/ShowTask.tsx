import { useState } from 'react';


import { View } from 'react-native'
import { Button, Portal, Text, Modal, IconButton } from 'react-native-paper'
import { Task } from '../types/task.types'
import { useTaskContext } from '../context/TaskContext'
import { ScaledSheet } from 'react-native-size-matters';
import TaskForm from './TaskForm';




export function ShowTask({ task }: { task: Task }) {
    const { removeTask, toggleTask, upDateTask } = useTaskContext();

    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const deleteTask = (task: Task) => removeTask(task);
    const completeTask = (task: Task) => toggleTask(task);
    return (
        <View style={styles.containerStyle}>
            <View style={styles.textContainer} >
            <Text style={styles.textStyle}>{task.title}</Text>
            <Text style={styles.textStyle}>{task.description}</Text>
            <Text style={styles.textStyle}>{task.date}</Text>
            <Text style={styles.textStyle}>{task.completed ? 'Completed' : 'Not Completed'}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <IconButton icon={'update'} onPress={showModal} />
                <IconButton icon={'clipboard-check'} onPress={() => completeTask(task)} />
                <IconButton icon={'delete'} onPress={() => deleteTask(task)} />
            </View>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalStyle} >
                    <Text>Edit Task</Text>
                </Modal>
            </Portal>
        </View>
    )
};

const styles = ScaledSheet.create({
    containerStyle: {
        flex: 1,
        padding: '10@s', 
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle: {
        fontSize: '14@s', 
        color: '#333', 
        marginBottom: '10@s', 
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10@s', 
    },
    modalStyle: {
        backgroundColor: 'white', 
        padding: '20@s', 
        borderRadius: '4@s', 
    },
});