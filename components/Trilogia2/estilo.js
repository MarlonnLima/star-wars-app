import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    boxDescricao: {
        alignItems: "center"
      },
    img: {
        width: 200,
        height: 200,
        marginVertical: 10
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gold',
        textAlign: 'center',
    },
    paragrafo: {
        fontSize: 14,
        color: 'gold',
        textAlign: 'center',
        marginBottom: 10,
        paddingHorizontal: 30
    }
})


export default styles