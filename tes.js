
  


function check(){
    const str  = document.getElementById("fname").value
    var lastLetter = str.charAt(str.length - 1);
     if(lastLetter !== 'a'&&str!==null){
        alert("are you gay for yes tap 'ok' for no tap 'cancel'")
     }
    
     const str2  = document.getElementById("lname").value
    var lastLetter = str2.charAt(str2.length - 1);
    if ( lastLetter === 'a'&&str2!==null) {
     alert("are you gay for yes tap 'ok' for no tap 'cancel'")
    }

const data = Math.floor(Math.random()*100+1);

return data+"%";

}

getDetails = ()=>{
    const str  = document.getElementById("fname").value
    const str2  = document.getElementById("lname").value

    return `love between you and  your crush '${str}' ❤️‍🩹`
}

  
let form = document.querySelector("form");
// The document.querySelector() method returns the first element that matches a specified CSS selector.
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // The preventDefault() method stops the form from submitting and prevents the page from refreshing.
    document.querySelector("#sub").value = "Submiting..";
    // Change the value of the submit button to "Submitting..." while the form is being submitted.
    let data = new FormData(form);
    // The FormData() method creates a new FormData object that contains the values of all the form fields.
    fetch('https://script.google.com/macros/s/AKfycbz3O5jmtqMY_IrouHD_yOEC7gXWc4u6zef75wGLwPr25F8hnz33VTkEM7DKwwqrUek/exec', {
            method: "POST",
            body: data
        })
        // The fetch() method is used to make a request to the server and retrieve data.
        // This is an example API endpoint. Replace it with the actual URL for the API endpoint you want to use.
        .then(res => res.text())
        // The .then() method is used to handle the response from the server.
        // The response is converted to text using the res.text() method.
        .then(data => {
            document.querySelector("#result").innerHTML = check();
            document.querySelector("#tex").innerHTML = getDetails();
            console.log(data);
            

// Access the values of "fname" and "lname" properties

         // The innerHTML property sets or returns the HTML content of an element.
            // Here, we are setting the content of the <h1> element to the response from the server.
            document.querySelector("#sub").value = "Done!"
            // Change the value of the submit button back to "Submit" after the form has been submitted.
        });
})

   