const errorMessage = "Search request unsuccessful. Status code: ";
const invalidSubmission = "Your submission is invalid. Please make sure your submission is not empty and does not contain numbers.";
const endpoint = "http://dlee533.me/api/definitions/?word="; // Update root endpoint
// const endpoint = "http://localhost:8083/?word=";
          
function submitRequest() {
    const word = document.getElementById("word").value.toLowerCase().trim();
    if (word && isNaN(word)) {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", endpoint + word, true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("response").innerHTML = this.responseText;
            }
            else {
                document.getElementById("response").innerHTML = errorMessage + this.status;
            }
        }
    } else {
        window.alert(invalidSubmission);
    }
}