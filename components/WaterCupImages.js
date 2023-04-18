import { StyleSheet, Image } from 'react-native';
const waterImageSource = require('./assets/images/background-image.png');

export default function WaterImage({ waterImageSource }) {
    return (
        <Image source={WaterImage} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    },
});