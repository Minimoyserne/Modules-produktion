import { showAllUsers, showUser } from "./modules/view/userViews.js";
import { createForm } from "./modules/view/login.js";

// hoisting to window level.
window._myEventListners = { userClicked, userViewDone, checkUser };

let globalUserData;



// globals ----------------------------------------------------------------


// fetch users  model code ------------------------------------------------
// fetchUsers();
createForm("app", "Log in");

function fetchUsers() {
    fetch('https://dummyjson.com/users?limit=0')

        .then((response) => {
            // error check på netværk response
            if (!response.ok) {
                throw new Error("not ok!" + response.status);
            }

            // konverter response til json data objekt
            let data = response.json();
            return data;

        })

        .then((data) => {
            // do stuff
            recivedUsers(data.users);
        })

        .catch((error) => {
            console.log(error.message);
        });
}


// controller codes ------------------------------------------------
function recivedUsers(myUsers) {
    globalUserData = myUsers;
    showAllUsers(myUsers, 'app', true, "vis");

}


function userClicked(myId) {
    globalUserData.forEach(userObject => {

        if (userObject.id == myId) {
            showUser(userObject, 'app', true);
        }
    });
}

function userViewDone() {
    showAllUsers(globalUserData, 'app', true, "vis");
}

function checkUser(theUserIndput, thepasswordIndput) {
    let indputFromUser = document.getElementById(theUserIndput).value;
    let indputFromPassword = document.getElementById(thepasswordIndput).value;


    fetch(`https://dummyjson.com/users/filter?key=username&value=${indputFromUser}`)


        .then((response) => {
            // error check på netværk response
            if (!response.ok) {
                throw new Error("not ok!" + response.status);
            }

            // konverter response til json data objekt
            let data = response.json();
            return data;

        })

        .then((data) => {
            if (!data.users[0]) {
                //console.log('bruger ikke ok');
                const brugernavnInput = document.querySelector('input[name="brugernavn"]');
                brugernavnInput.style.border = "5px solid red";
                
                const brugerErrorMessage = document.getElementById('errorText');
                brugerErrorMessage.innerText = 'Det indtastede brugernavn findes ikke.';

            } else if (data.users[0].password === indputFromPassword) {
                fetchUsers(); //Se alle brugere der hentes på API)
                //recivedUsers(data.users); (se den lenkelte der er logget ind)

            } else {
                // console.log('not rigtig password');
                const passwordInput = document.querySelector('input[name="password"]');
                passwordInput.style.border = "5px solid red";
                
                const errorMessage = document.getElementById('errorText');
                errorMessage.innerText = 'Det indtastede password stemmer ikke overens med brugernavn.';
            }

        })

        .catch((error) => {
            console.log(error.message);
        })
    
}    
//testuser
// "id": 1,
// "firstName": "Terry",
// "lastName": "Medhurst",
// "maidenName": "Smitham",

// "username": "atuny0",
// "password": "9uQFF1Lh",