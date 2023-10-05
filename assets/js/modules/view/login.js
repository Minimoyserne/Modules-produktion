



export function createForm(id, logintekst) {
 let myForm = document.getElementById(id);
 let userIndput = "userIndput";
 let passIndput = "passIndput";

 myForm.innerHTML = `
 <article id="formArticle">
   <section id="loginForm">
      <label for="brugernavn">Brugernavn</label>
      <input name="brugernavn" type="text" id="${userIndput}">
      <label for="password">Password</label>
      <input name="password" type="password" id="${passIndput}">
      <button onclick="window._myEventListners.checkUser('${userIndput}', '${passIndput}')">${logintekst}</button>
      <p id="errorText"></p>
   </section>
 </article>
 `;
}


//callback får 2 id userIndput og passIndput. Kan bruges til document.getelementbyId(userIndput).value
