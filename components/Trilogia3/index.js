import { Text, View, Image } from 'react-native'
import vader from '../../assets/image/Rey.jpg'

import styles from './estilo'

export default function Trilogia1() {
    return (
        <View style={styles.container}>
            <View style={styles.boxDescricao}>
                <Text style={styles.titulo}>A história de Rey</Text>
                <Image style={styles.img} source={vader}></Image>
                <Text style={styles.paragrafo}>Trilogia sequela. Episódios VII, VIII e IX</Text>
                <Text style={styles.paragrafo}>Enquanto suege uma nova ameaça para a galáxia, Rey, uma catadora de sucata e Finn, um soldado imperial desertor, devem se juntar a Han Solo e Chewbacca para procurar a única esperança de restaurar a paz da galáxia</Text>
            </View>
        </View>
    )
}