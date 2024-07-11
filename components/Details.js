import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button,
    ScrollView,
    StatusBar
} from 'react-native'
import React from 'react'

const Details = ({ navigation, route }) => {
    const { title, author, cover, description, audios } = route.params

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image style={{ width: 174, height: 250, borderRadius: 20, alignSelf: 'center', marginTop: 20 }}
                    source={{ uri: cover }}
                />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>{title}</Text>
                <Text style={{ fontSize: 17 }}>By : {author}</Text>

                <Text style={{ fontSize: 17, color: '#000', fontWeight: 'bold', }}>About this book</Text>
                <Text>{description}</Text>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('AudioList',
                            {
                                audios
                            })}>
                        <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>Listen</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: StatusBar.currentHeight,
    },
    text: {
        fontSize: 30,
    },
    button: {
        width: 120,
        height: 40,
        backgroundColor: '#55E775',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    like: {
        paddingTop: 5
    }
});
export default Details