import firebase from "firebase";

const config = {
	apiKey: "AIzaSyDz1f4wyAiLeLTDXFVgn5VM7lzfAnXM6Fc",
	authDomain: "cluster-hackathon-group.firebaseapp.com",
	databaseURL: "https://cluster-hackathon-group.firebaseio.com",
	projectId: "cluster-hackathon-group",
	storageBucket: "cluster-hackathon-group.appspot.com",
	messagingSenderId: "324046460090",
	appId: "1:324046460090:web:ec28587bdf50b82d345e83",
	measurementId: "G-87PTJGLV30"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
