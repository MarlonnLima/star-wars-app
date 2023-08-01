import { Text, View, Image } from 'react-native'
import vader from '../../assets/image/Luke.jpeg'

import styles from './estilo'

export default function Trilogia1() {
    return (
        <View style={styles.container}>
            <View style={styles.boxDescricao}>
                <Text style={styles.titulo}>A história de Luke Skywalker</Text>
                <Image style={styles.img} source={vader}></Image>
                <Text style={styles.paragrafo}>Trilogia original Episódios IV, V e VI</Text>
                <Text style={styles.paragrafo}>Essa foi a primeira trilogia a surgir porém sua história se passa após a trilogia prequela.</Text>
                <Text style={styles.paragrafo}>Nela Luke Skywalker se aventura pela galáxia para atender a um pedido de socorro da princesa Leia e batalha com o grande vilão Darth Vader.</Text>
            </View>
        </View>
    )
}