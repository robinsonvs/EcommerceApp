const config = {
    apiKey: "AIzaSyDh4neQ0Xu7wYNjWtt7v6QCQNxMRrRW01M",
    authDomain: "ecommerceapp-9833b.firebaseapp.com",
    databaseURL: "https://ecommerceapp-9833b.firebaseio.com",
    projectId: "ecommerceapp-9833b",
    storageBucket: "",
    messagingSenderId: "44830830349"
  };

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export default base
