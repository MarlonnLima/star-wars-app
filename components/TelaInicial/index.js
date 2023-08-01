import { Text, View, Image, Button } from 'react-native'
import styles from './estilo'


import logo from '../../assets/image/logo_star_wars.png'

export default function TelaInicial(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo}></Image>

            <Text style={styles.titulo}>Você sabe qual é a ordem cronológica da franquia Star Wars?</Text>

            <Text style={styles.paragrafo}>Os principais filmes da franquia estão dividos em trilogias. Clique no botão para conferir.</Text>

            <View style={styles.containerBotao}>
                <Button title="VER 1º TRILOGIA" onPress={() => props.navigation.navigate('Trilogia1')} />
            </View>

            <View style={styles.containerBotao}>
                <Button title="VER 2º TRILOGIA" onPress={() => props.navigation.navigate('Trilogia2')} />
            </View>

            <View style={styles.containerBotao}>
                <Button title="VER 3º TRILOGIA" onPress={() => props.navigation.navigate('Trilogia3')} />
            </View>
        </View>
    )
}