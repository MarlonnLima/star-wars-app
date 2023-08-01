import { Text, View, Image } from 'react-native'
import vader from '../../assets/image/DVader.jpeg'

import styles from './estilo'

export default function Trilogia1() {
    return (
        <View style={styles.container}>
            <View style={styles.boxDescricao}>
                <Text style={styles.titulo}>A história do Darth Vader</Text>
                <Image style={styles.img} source={vader}></Image>
                <Text style={styles.paragrafo}>Trilogia prequela. Episódios I, II e III</Text>
                <Text style={styles.paragrafo}>Apesar de ter sido criada depois da trilogia original essa é a primeira trilogia na ordem cronologica da série Star Wars. Nela é contada a história do grande vião Darth Vader.</Text>
                <Text style={styles.paragrafo}>Através dessa trilogia você vai saber de onde ele veio e quem ele é.</Text>
            </View>
        </View>
    )
}