import { View } from 'react-native'
import { Text, IconButton } from 'react-native-paper'
import { Task } from '../types/task.types'
import { useTaskContext } from '../context/TaskContext'
import { ScaledSheet } from 'react-native-size-matters';

import { router } from 'expo-router';




export function ShowTask({ task, hideModal }: { task: Task, hideModal: () => void }) {
    const { removeTask, toggleTask } = useTaskContext();



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
                <IconButton icon={'update'} onPress={
                    () => {
                        hideModal();
                        router.navigate({
                            pathname: '/tasks/components/TaskForm',
                            params: { taskID: task.id }
                        })
                    }
                } />
                <IconButton icon={'clipboard-check'} onPress={() => completeTask(task)} />
                <IconButton icon={'delete'} onPress={() => deleteTask(task)} />
            </View>
        </View>
    )
};

const styles = ScaledSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10@s',
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: '10@s',
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