

export function showAllUsers(userData, displayElement, buttonIf, buttonText) {

    // find DOM element
    let myApp = document.getElementById(displayElement);


    // clear DOM element
    myApp.innerHTML = '';


    let myUserHtml = '';
    let myEditButton = '';



    userData.forEach((userObject) => {


        if (buttonIf) {

            myEditButton = `<button onclick="window._myEventListners.userClicked(${userObject.id})">${buttonText}</button>`;
            //myEditButton = `<button onclick="showUser(${userObject.id})">edit</button>`;
        }

        myUserHtml += `
        <tbody>
            <tr>
                <td>${userObject.firstName}</td>
                <td>${userObject.lastName}</td>
                <td>${myEditButton}</td>
            </tr>
            </tbody>`;
    });

    myApp.innerHTML = `
    <section class="userViews">
        <h2>Users</h2>
        <table>
            <thead>
                <tr>
                    <th>Fornavn</th>
                    <th>Efternavn</th>
                    <th></th>
                </tr>
            </thead>
            ${myUserHtml}
        </table>
    </section>`;

}



export function showUser(myUser, displayElement, returnButton) {

    let myApp = document.getElementById(displayElement);
    // clear DOM element
    myApp.innerHTML = '';


    let myUserHtml = '';
    let myEditButton = '';





    // iterate over the user object

    for (const key in myUser) {



        myUserHtml += `<tr><td>${key}: </td><td>${myUser[key]}</td></tr>`;
    }

    if (returnButton) {
        myEditButton = `<button onclick="window._myEventListners.userViewDone()">done</button>`;
    }

    myApp.innerHTML = `<section><h2>User</h2><table>${myUserHtml}</table>${myEditButton}</section>`;





}

// to force change