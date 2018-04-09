const config = {
    apiKey: "AIzaSyDh4neQ0Xu7wYNjWtt7v6QCQNxMRrRW01M",
    authDomain: "ecommerceapp-9833b.firebaseapp.com",
    databaseURL: "https://ecommerceapp-9833b.firebaseio.com",
    projectId: "ecommerceapp-9833b",
    storageBucket: "gs://ecommerceapp-9833b.appspot.com",
    messagingSenderId: "44830830349"
  };

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const storage = app.storage()

export default base
