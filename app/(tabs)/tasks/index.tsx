

import { Link, Stack } from 'expo-router'
import { View, Text, FlatList, ScrollView } from 'react-native'
import { useTaskContext } from './context/TaskContext'
import TaskCard from './components/TaskCard'
import { ScaledSheet } from 'react-native-size-matters'
import { Icon } from 'react-native-paper'


export default function index() {
  const { tasks } = useTaskContext();

  return (
    <View style={styles.container}>
      <FlatList data={tasks} renderItem={({ item }) => (
        <TaskCard task={item} />
      )}
      keyExtractor={(item) => item && item.id ? item.id.toString() : ''}
      />
    <Link href="tasks/components/TaskForm" style={styles.taskPlus}>
      <Icon source="plus" size={40} />
    </Link>
    </View>
  )
}


const styles = ScaledSheet.create({
  taskPlus: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 50,

  },
  container: {
    height: '100%',
   

  },
 
});