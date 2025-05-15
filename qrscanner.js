function onScanSuccess(decodedText, decodedResult) {
    // Vis resultat på siden
    document.getElementById("resultat").innerText = decodedText;

    // Stop scanner efter ét succesfuldt scan
    html5QrcodeScanner.clear().then(() => {
        console.log("Scanner stoppet");
    }).catch(error => {
        console.error("Fejl ved stop af scanner", error);
    });
}

const html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: 250 },
    /* verbose= */ false
);
html5QrcodeScanner.render(onScanSuccess);
