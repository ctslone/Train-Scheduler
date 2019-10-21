$(document).ready(function () {
    // adding FB to the app
    var config = {
        apiKey: "AIzaSyCsnN2fUQv34EoUy56xJJLir0ISDRF27Q8",
        authDomain: "train-scheduler-2c626.firebaseapp.com",
        databaseURL: "https://train-scheduler-2c626.firebaseio.com",
        projectId: "train-scheduler-2c626",
        storageBucket: "train-scheduler-2c626.appspot.com",
        messagingSenderId: "204190789100",
        appId: "1:204190789100:web:7092d6714b16b6b55524c9"
    };
    // initializing firebase
    firebase.initializeApp(config);
    // creating varible to reference the DB
    var database = firebase.database();

    // initial variables
    var trainName = "";
    var destination = "";
    var frequency = "";
    var nextArrival = "";
    var minsAway = "";
    // console.log("These are the variables:" + trainName, destination, frequency, nextArrival, minsAway)













})