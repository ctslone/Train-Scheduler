$(document).ready(function () {
    // adding FB to the app
    var firebaseConfig = {
        apiKey: "AIzaSyCsnN2fUQv34EoUy56xJJLir0ISDRF27Q8",
        authDomain: "train-scheduler-2c626.firebaseapp.com",
        databaseURL: "https://train-scheduler-2c626.firebaseio.com",
        projectId: "train-scheduler-2c626",
        storageBucket: "train-scheduler-2c626.appspot.com",
        messagingSenderId: "204190789100",
        appId: "1:204190789100:web:7092d6714b16b6b55524c9"
    };
    // initializing firebase
    firebase.initializeApp(firebaseConfig);
    // creating varible to reference the DB
    var database = firebase.database();

    // initial variables that will be user input
    var trainName = "";
    var destination = "";
    var frequency = "";
    var firstTime = "";

    // creating an on click event listener for the choo choo button
    $("#choo-choo-btn").on("click", function (form) {
        form.preventDefault();

        // re-declaring the variables to the user input
        trainName = $("#train-name-input").val().trim();
            console.log(trainName);
        destination = $("#destination-input").val().trim();
            console.log(destination);
        frequency = $("#frequency-input").val().trim();
            console.log(frequency);
        firstTime = $("#first-time-input").val().trim();
            console.log(firstTime);
        // console.log("These are the variables:" + trainName, destination, frequency, nextArrival, minsAway)

        // creating new child for the variables in firebase
        database.ref().push({
            trainName: trainName,
            destination: destination,
            frequency: frequency,
            firstTime: firstTime,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

        // listener for adding a child to the DB
        database.ref().on("child_added", function(snapshot) {
            // creating a varible that holds a snapshot of the data at that moment (hence snapshot)
            var sv = snapshot.val();
            
        })
})












})