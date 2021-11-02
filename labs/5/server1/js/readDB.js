const errorMessage = "Request unsuccessful. Status code: ";
const endpoint = "https://dlee533.me/api/score/";
const table = document.getElementById('table');
const emptyTableMessage = "DB is empty"

window.onload = function() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", endpoint, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const dataEntries = JSON.parse(this.responseText).message;
            if (dataEntries.length == 0) {
              let row = table.insertRow();
              let cell = row.insertCell();
              cell.innerHTML = emptyTableMessage;
            } else {
              for (let i = 0; i < dataEntries.length; i++) {
                let row = table.insertRow();
                let nameCell = row.insertCell();
                let scoreCell = row.insertCell();
                nameCell.innerHTML = dataEntries[i].name;
                scoreCell.innerHTML = dataEntries[i].score;
              }
            }
        } else if (this.readyState == 4) {
            document.getElementById("response").innerHTML = errorMessage + this.status;
        }
    }
}
