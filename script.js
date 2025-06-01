// Functie om een random bedrag tussen min en max te genereren, afgerond op duizendtallen
function getRandomAmount(min, max) {
    // We vermenigvuldigen dit met (max - min) en tellen min erbij op om binnen het bereik te blijven
    // Vervolgens delen we door 1000, ronden af met Math.round en vermenigvuldigen weer met 1000 voor duizendtallen
    return Math.round((Math.random() * (max - min) + min) / 1000) * 1000;
}
// Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
// Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round





window.onload = () => {
    // Bij het laden van de pagina wordt het 'wallet'-element gevuld met een willekeurig bedrag, mooi in euro's
    document.getElementById('wallet').textContent = `€${getRandomAmount(400000, 2000000).toLocaleString('nl-NL')}`;

    // Tekst uit wallet-element ophalen (zoals "€1.400.000")
    let walletText = document.getElementById('wallet').textContent;
    // Regex om euro-teken, punten en spaties te verwijderen zodat we een nummer overhouden
    const regex = new RegExp('[€.\\s]', 'g');
    // Omzetten naar een Number
    let wallet = Number(walletText.replace(regex, ''));

    // Functie om het totaalbedrag uit het invoerveld 'total' te halen en te converteren naar een getal
    function getTotal() {
        const totalInput = document.getElementById("total").value;
        // Regex opnieuw om symbolen te verwijderen
        const regex = new RegExp('[€.\\s]', 'g');
        return Number(totalInput.replace(regex, '')) || 0; // terug naar 0
    }

    // Koppelen van eventlistener aan de knop met id 'order'
    const orderButton = document.getElementById('order');
    orderButton.addEventListener('click', () => {
        let total = getTotal(); // totaalbedrag ophalen
        if (total > wallet) {
            alert("Je komt geld tekort! Maak een andere combinatie."); // waarschuwing bij te weinig geld
        } else if (total === 0) {
            alert("Selecteer eerst een combinatie."); // waarschuwing als niks geselecteerd is
        }
    });
};
// Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const 
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event 
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById 
// Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
// Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else#using_else_if 
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent 
// Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions 
// Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number 





// Elementen voor horloge-afbeelding en naam op de pagina ophalen
const imgHorloge = document.querySelector(".horloge");
const naamHorloge = document.querySelector(".horloge-naam");
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector 

// Object met horloges, allemaal met naam, afbeelding, prijs en audiobestand
const HORLOGES = {
    pat: { naam: "Patek Grand", src: "Images/PatekGrand.PNG", prijs: 1400000, audio: "Audio/PatekGrand.MP3" },
    rm: { naam: "RM 56-02", src: "Images/RichardMille.PNG", prijs: 1300000, audio: "Audio/RichardMille.MP3" },
    roy: { naam: "Royal Oak", src: "Images/RoyalOak.PNG", prijs: 950000, audio: "Audio/RoyalOak.MP3" },
    ast: { naam: "Astronomia", src: "Images/Astronomia.PNG", prijs: 800000, audio: "Audio/Astronomia.MP3" },
    day: { naam: "Daytona", src: "Images/Daytona.PNG", prijs: 500000, audio: "Audio/Daytona.MP3" },
    gf: { naam: "GF Quad", src: "Images/GruebelForsey.PNG", prijs: 800000, audio: "Audio/GreubelForsey.MP3" },
    vac: { naam: "Vacheron", src: "Images/Vacheron.PNG", prijs: 1000000, audio: "Audio/Vacheron.MP3" },
    big: { naam: "Big Bang", src: "Images/BigBang.PNG", prijs: 200000, audio: "Audio/BigBang.MP3" },
    exc: { naam: "Excalibur", src: "Images/Excalibur.PNG", prijs: 350000, audio: "Audio/Excalibur.MP3" },
    hm9: { naam: "HM9 Flow", src: "Images/HM9.PNG", prijs: 300000, audio: "Audio/HM9Flow.MP3" }
};
// De audio files heb ik van deze website: https://luvvoice.com/ 
// De images voor de horloges heb ik van https://google.com/ 





// Functie om het horloge te tonen: afbeelding, naam + prijs en geluid afspelen
function toonHorloge(info) {
    imgHorloge.src = info.src; // afbeelding veranderen
    naamHorloge.textContent = `${info.naam} €${info.prijs.toLocaleString('nl-NL')}`; // tekst aanpassen met naam en prijs
    if (info.audio) new Audio(info.audio).play(); // audio afspelen indien aanwezig
}
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src 
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent 
// Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString 
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio 
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/Animation/play





// Elementen voor extra producten ophalen
const imgExtra = document.querySelector(".extra");
const naamExtra = document.querySelector(".extranaam");

// Extra producten met naam, afbeelding, prijs en audio
const EXTRA_PRODUCTEN = {
    wat: { naam: "Watchbox", src: "Images/Watchbox.PNG", prijs: 350000, audio: "Audio/Watchbox.MP3" },
    sun: { naam: "Sunglasses", src: "Images/Sunglasses.PNG", prijs: 220000, audio: "Audio/Sunglasses.MP3" },
    tra: { naam: "Travel bag", src: "Images/Travelbag.PNG", prijs: 380000, audio: "Audio/Travelbag.MP3" },
    wal: { naam: "Wallet", src: "Images/Wallet.PNG", prijs: 120000, audio: "Audio/Wallet.mp3" },
    tom: { naam: "Tom Ford parfume", src: "Images/TomFordParfume.PNG", prijs: 150000, audio: "Audio/TomFordParfume.MP3" },
    jac: { naam: "Jacket", src: "Images/Jacket.PNG", prijs: 400000, audio: "Audio/Jacket.MP3" }
};
// De audio files heb ik van deze website: https://luvvoice.com/ 
// De images voor de extra producten heb ik van https://google.com/ 





// Variabelen om de prijs van de geselecteerde horloge en extra product bij te houden
let geselecteerdHorloge = 0;
let geselecteerdExtra = 0;

// Eventlisteners toevoegen aan knoppen in de horloge-grid (btn-grid1)
// Als er geklikt wordt, wordt het juiste horloge getoond en prijs opgeslagen
document.querySelectorAll(".btn-grid1 button").forEach(button => {
    button.addEventListener("click", () => {
        const key = button.classList[0]; // de eerste class naam is de key in HORLOGES
        const info = HORLOGES[key];
        if (info) {
            toonHorloge(info); // toont horloge info
            geselecteerdHorloge = info.prijs; // slaat prijs op
            updateTotaal(); // update totaalprijs op pagina
        }
    });
});

// Eventlisteners toevoegen aan knoppen in extra producten-grid (btn-grid2)
// Zelfde als horloges, maar dan voor extra producten + audio afspelen
document.querySelectorAll(".btn-grid2 button").forEach(button => {
    button.addEventListener("click", () => {
        const key = button.classList[0];
        const info = EXTRA_PRODUCTEN[key];
        if (info) {
            imgExtra.src = info.src; // afbeelding aanpassen
            naamExtra.textContent = `${info.naam} - €${info.prijs.toLocaleString('nl-NL')}`; // naam en prijs aanpassen
            geselecteerdExtra = info.prijs; // prijs opslaan
            if (info.audio) new Audio(info.audio).play(); // audio afspelen
            updateTotaal(); // totaal bijwerken
        }
    });
});
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll 





// Functie om totaalprijs te berekenen en te laten zien
function totalIt() {
    let totaal = 0;

    // Ophalen geselecteerde radio voor eerste productgroep
    const selectedProduct = document.querySelector('input[name="product"]:checked');
    if (selectedProduct) {
        totaal += Number(selectedProduct.value); // waarde optellen bij totaal
    }

    // Ophalen geselecteerde radio voor tweede productgroep
    const selectedProduct2 = document.querySelector('input[name="product2"]:checked');
    if (selectedProduct2) {
        totaal += Number(selectedProduct2.value); // waarde optellen
    }

    // Invoerveld 'total' vullen met geformatteerde prijs
    document.getElementById("total").value = "€ " + totaal.toLocaleString("nl-NL");
}





// Radio buttons kunnen worden uitgevinkt als ze al geselecteerd waren
document.querySelectorAll('input[type=radio]').forEach(radio => {
    radio.addEventListener('click', function (e) {
        if (this.wasChecked) {
            this.checked = false; // vinkt uit
            this.wasChecked = false;
            totalIt(); // update totaal
        } else {
            // Als deze knop net is aangeklikt, zet alle anderen op false
            const name = this.name;
            document.querySelectorAll(`input[name="${name}"]`).forEach(r => r.wasChecked = false);
            this.wasChecked = true;
            totalIt(); // update totaal
        }
    });
});
// Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else#using_else_if 





// Start intro en achtergrondmuziek als de startIntro knop wordt aangeklikt 
document.getElementById('start-intro').addEventListener('click', function () {
    const audio = document.getElementById('Achtergrondmuziekje');
    audio.volume = 0.1; // volume lager gezet, omdat het een achtergrondmuziekje is
    audio.play(); // muziek starten
    document.getElementById('intro').style.display = 'none'; // intro verbergen
});
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume 
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play 
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener  
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById  
// Bron: https://developer.mozilla.org/en-US/docs/Web/CSS/display  





document.addEventListener("DOMContentLoaded", function () {
    // Wacht tot de hele pagina klaar is met laden, dan pas start deze code

    const koopKnop = document.getElementById("order");             // Pakt de knop 'Koop nu!'
    const popup = document.getElementById("order-popup");          // Pakt het pop-up venster dat je wil tonen
    const sluitKnop = document.getElementById("close-order-popup"); // Pakt de knop 'Sluiten' in de pop-up
    const koopSound = document.getElementById("koopSound");         // Pakt het geluidsbestand voor de pop-up
    const achtergrondmuziek = document.getElementById("Achtergrondmuziekje"); // Pakt de achtergrondmuziek

    koopKnop.addEventListener("click", function () {
        // Als iemand op 'Koop nu!' klikt, gebeurt het dit:

        popup.style.display = "flex";    // Laat het pop-up venster zien

        achtergrondmuziek.pause();       // Stopt het afspelen van de achtergrondmuziek
        achtergrondmuziek.currentTime = 0; // Zet de achtergrondmuziek terug naar het begin

        koopSound.currentTime = 0;       // Zet het geluid terug naar het begin
        koopSound.play();                // Start het afspelen van het geluid
    });

    sluitKnop.addEventListener("click", function () {
        // Als iemand op 'Sluiten' klikt in de pop-up:

        popup.style.display = "none";    // Verbergt het pop-up venster weer
        koopSound.currentTime = 0;       // Zet het pop-up geluid terug naar het begin (stop eventueel het geluid)
        location.reload();               // Vernieuwt de hele pagina
    });
});

// Bron: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event 
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause 
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime 
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/Location/reload 


