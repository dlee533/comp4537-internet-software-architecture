const errorMessage = "Store request unsuccessful. Status code: ";
const invalidSubmission = "Your submission is invalid. Please make sure your submission is not empty and does not contain numbers.";
const endpoint = "https://dlee533.me/api/definitions/";
// const endpoint = "http://localhost:8083/";

function submitRequest() {
    const word = document.getElementById("word").value.toLowerCase().trim();
    const definition = document.getElementById("definition").value.trim();
    if (word && definition && isNaN(word)) {
        const params = `?word=${word}&definition=${definition}`;
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", endpoint, true);
        xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhttp.send(params);
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              const res = JSON.parse(this.responseText);
              document.getElementById("response").innerHTML = `Request #${res.requestNum} "${res.message}" ${res.success ? "message stored successfully" : ""}`;
            }
            else {
              const res = JSON.parse(this.responseText);
              document.getElementById("response").innerHTML = `Request #${res.requestNum} error code: ${this.status}:${res.message}`;
            }
        }
    } else {
        window.alert(invalidSubmission);
    }
}
