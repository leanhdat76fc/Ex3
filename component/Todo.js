import { View, Text } from 'react-native'
import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { List } from 'react-native-paper'

const Todo = ({id, title, complete}) => {
    const [isComplete, setIsComplete] = useState(complete); 

    async function toggleComplete(){
        await firestore()
            .collection('todos')
            .doc(id)
            .update({
                complete: !isComplete, 
            });

        setIsComplete(!isComplete); 
    }

    return (
        <List.Item
            title={title}
            onPress={() => toggleComplete()}
            left={props => (
                <List.Icon {...props} icon={isComplete ? 'check' : 'cancel'}></List.Icon> 
            )}
        >
        </List.Item>
    )
}

export default Todo
