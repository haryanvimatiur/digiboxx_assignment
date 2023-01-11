const url = document.getElementById("url-input").value;

const shortenUrl = async (url) => {
    // Use an API to shorten the URL
    const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        body: JSON.stringify({url: url}),
        headers: { "Content-Type": "application/json" }
    });

    const shortUrl = await response.json();
    return shortUrl;
}

const createQRCode = (shortUrl) => {
    
    var qrcode = new QRCode("qrcode", {
        text: shortUrl,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

const handleSubmit = async () => {
    const url = document.getElementById("url-input").value;
    const shortUrl = await shortenUrl(url);
    createQRCode(shortUrl);
}

document.getElementById("submit-button").addEventListener("click", handleSubmit);
