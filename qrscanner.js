console.log("QR scanner script loaded");

window.addEventListener('DOMContentLoaded', function () {
    const html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 });

    html5QrcodeScanner.render(function (decodedText, decodedResult) {
        alert("QR-kode læst: " + decodedText);
        html5QrcodeScanner.clear();
    });
});