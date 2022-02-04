import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
//PONER ACA LA INFO DE SU APP
{
    apiKey: "AIzaSyDlLAOWrYJ8VRgeamQ8EWZ1gNFWFRHSByY",
    authDomain: "tienda-basic.firebaseapp.com",
    projectId: "tienda-basic",
    storageBucket: "tienda-basic.appspot.com",
    messagingSenderId: "376828571768",
    appId: "1:376828571768:web:6d65666c4cc8787f2d3d8d"
}
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}