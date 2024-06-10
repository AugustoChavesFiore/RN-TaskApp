import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';
import { Task } from '../types/task.types';
import { ScaledSheet } from 'react-native-size-matters';
import { ShowTask } from './ShowTask';

export default function TaskCard({task}: {task: Task}) {
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return (
        <TouchableWithoutFeedback onPress={showModal}>
            <View style={styles.taskContainer}>
                <Text style={styles.title}>{task.title}</Text>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal}  contentContainerStyle={styles.containerStyle}>
                        <ShowTask task={task} />
                    </Modal>
                </Portal>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = ScaledSheet.create({
    taskContainer: {
        padding: '10@s',
        margin: '10@s',
        borderRadius: '10@s',
        backgroundColor: '#dcdcdc',
    },
    title: {
        fontSize: '20@s',
    },
    containerStyle: {
        backgroundColor: '#dcdcdc',
        height: '50%',
        padding: '20@s',
        margin: '20@s',
        borderRadius: '10@s',

    }
});