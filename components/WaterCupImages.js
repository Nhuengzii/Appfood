import { StyleSheet, Image } from 'react-native';
const waterImageSource = require('./assets/images/water-cup.png');

export default function WaterImage({ waterImageSource }) {
    return (
        <Image source={waterImageSource} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    },
});