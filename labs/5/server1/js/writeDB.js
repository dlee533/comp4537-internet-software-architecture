const errorMessage = "Store request unsuccessful. Status code: ";
const invalidSubmission = "Your submission is invalid. Please make sure your submission is not empty and does not contain numbers.";
const endpoint = "https://dlee533.me/api/score/"; // Update endpoint

function submitRequest() {
    const name = document.getElementById("name").value.trim();
    const score = document.getElementById("score").value.trim();
    if (name && score && isNaN(name) && !isNaN(score)) {
        let params = { name, score };
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", endpoint, true);
        xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhttp.send(JSON.stringify(params));
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              document.getElementById("response").innerHTML = JSON.parse(this.responseText).message;
            }
            else {
              document.getElementById("response").innerHTML = errorMessage + this.status;
            }
        }
    } else {
        window.alert(invalidSubmission);
    }
}
