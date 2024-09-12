import { initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDvWK-F4iL9jHO91T6T3_oN0cpMoIMbWqo",
    authDomain: "book-app-d3a20.firebaseapp.com",
    projectId: "book-app-d3a20",
    storageBucket: "book-app-d3a20.appspot.com",
    messagingSenderId: "847891052629",
    appId: "1:847891052629:web:0f1b95aef0011dc30c3cdc",
    measurementId: "G-WXKGTB3RLK"
  };

  export const app = initializeApp(firebaseConfig);