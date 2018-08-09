// Zmienne globalne
let fileList;
let imageCache;
let audioCache;
let mapCache;

// Funkcje
function awaitXHR(xhr, sendData) {
    return new Promise(function(resolve) {
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                resolve(xhr.response);
            }
        };
        if (sendData)
            xhr.send(sendData);
        else
            xhr.send();
    });
}
function reloadFileList() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/project/all");
    return awaitXHR(xhr);
}

// Pierwsze ładowanie
(async function() {
    document.getElementById("loader_text").innerText = "Uruchamianie Expandy SDK...";

    // Pobierz listę plików
    fileList = JSON.parse(await reloadFileList());
    document.getElementById("loader_text").innerText = "Pobrano listę plików.";

    // Załaduj pliki do cache

    // Obrazki (tile oraz sprity)
    document.getElementById("loader_text").innerText = "Ładuję obrazki do Cache...";
})();