import React, {Component} from 'react'
import { Header, Icon, DrawerActions } from 'react-native-elements'


const MyHeader = props => {
    return (
        <Header

            leftComponent={< Icon name="bars" type="font-awesome" color='black' onPress={() => props.navigation.toggleDrawer()} />}
            centerComponent={{ text: props.title, style: { marginTop: 10, color: 'orange', fontSize: 20, fontWeight: 'bold' } }}
            backgroundColor="yellow"

        />

    )
}

export default MyHeader
