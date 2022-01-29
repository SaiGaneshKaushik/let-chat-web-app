var firebaseConfig = {
    apiKey: "AIzaSyDIu7rYlKT4JSlQT4A46GFwXfGDTSRYXb0",
    authDomain: "kwitter-34d4f.firebaseapp.com",
    databaseURL: "https://kwitter-34d4f-default-rtdb.firebaseio.com",
    projectId: "kwitter-34d4f",
    storageBucket: "kwitter-34d4f.appspot.com",
    messagingSenderId: "42084075303",
    appId: "1:42084075303:web:7693614a29075c544a8b02"
  };
  
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("userName");
room_name = localStorage.getItem("room_name");

function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name: user_name,
              message:msg,
              like:0
        });

        document.getElementById("msg").value = "";
  }