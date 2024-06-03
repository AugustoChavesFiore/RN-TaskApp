import {  View  } from 'react-native'
import { ScaledSheet} from 'react-native-size-matters'
import { Text } from 'react-native-paper'

type FormLayoutProps = {
    children: React.ReactNode,
    title: string,
};

export default function FormLayout({children, title}: FormLayoutProps) {
    return (
        <View style={styles.containerStyle}>
            <Text variant='displayLarge'>{title}</Text>
            {children}
        </View>

    )
};

const styles = ScaledSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: '80%',
    },
});