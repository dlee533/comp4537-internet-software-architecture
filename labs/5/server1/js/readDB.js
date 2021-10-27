const errorMessage = "Request unsuccessful. Status code: ";
const endpoint = "http://localhost:8888/"; // Update endpoint

window.onload = function() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", endpoint, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("response").innerHTML = this.responseText;
        } else {
            document.getElementById("response").innerHTML = errorMessage + this.status;
        }
    }
}