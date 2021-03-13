import * as React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import {MyHeader} from '../components/MyHeader'
import db from '../config'
import firebase from 'firebase'
import { ListItem } from 'react-native-elements'

export default class Notifications extends React.Component {

  constructor() {
    super()

    this.state = {

      CurrentUserid: firebase.auth().currentUser.email,
      AllUserNotifications: []
    }

    this.request = null
  }


  GetAllNotifications = () => {

    this.request = db.collection("Notifications").where("TargetedUserID", '==', this.state.CurrentUserid)
      .onSnapshot(Snapshot => {

        var AllNotifications = Snapshot.docs.map(document => document.data());
        this.setState({

          AllUserNotifications: AllNotifications

        })
      })
  }

  componentDidMount = () => {

    this.GetAllNotifications()

  }

  render() {
    return (
      <View>

        <MyHeader title='Notifications' />

        <View>

          <FlatList
            data={this.state.AllUserNotifications}
            renderItem={({ item }) => {

              return (

                <View>

                  <ListItem bottomDivider>

                    <ListItem.Content>

                      <ListItem.Title>

                        {item.BookName}

                      </ListItem.Title>

                      <ListItem.Subtitle>

                        {item.Message}

                      </ListItem.Subtitle>


                    </ListItem.Content>

                  </ListItem>

                </View>

              )
            }}
          />

        </View>
      </View>
    )
  }
}