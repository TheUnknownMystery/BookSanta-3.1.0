import * as React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import db from "../config.js"
import firebase from 'firebase'

export default class BookDonateScreen extends React.Component {

 constructor() {
  super()

  this.state = {

   BookList: ''
  }
  this.requestRef = null;
 }

 getBookList = () => {

  this.requestRef = db.collection("BookRequest")
   .onSnapshot((snapshot) => {

    var RequestedBookList = snapshot.docs.map(document => document.data());
    this.setState({
     BookList: RequestedBookList
    })

   })
 }

 componentDidMount() {

  this.getBookList()

 }

 render() {
  return (

   <View>

    <FlatList

     data={this.state.BookList}
     renderItem={({ item, i }) => {
      return (

       //<ListItem
       // key={i}
       //title={item.BookName}
       // subtitle={item.ReasonForBook}
       // titleStyle={{ color: 'black', fontWeight: 'bold' }}
       // bottomDivider
       ///>  
       <View>
        <Text>{"Book Name: "+ item.BookName}</Text>
         <Text>{"Reason: " + item.ReasonForBook}</Text>
       </View>
      )
     }} />


   </View>

  )
 }
}