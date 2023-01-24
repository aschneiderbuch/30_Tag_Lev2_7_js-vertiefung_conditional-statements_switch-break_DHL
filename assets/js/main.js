console.log("test");

/* 

Frage

value von selectbox holen

in Variable speichern


Funktion showtxt()

    switch case break default=(Extra große Größe)


output in html

*/

/* 
JS Assets

<b>Brief und Postkarte</b> <br>
L: 10 - 23,5 cm
B: 7 - 12,5 cm
H: bis 1 cm

<b>DHL Paket 2 kg</b> <br>
bis 60 x 30 x 15 cm

<b>DHL Paket 5 kg</b> <br>
bis 120 x 60 x 60 cm

<b>DHL Paket 10 kg</b> <br>
bis 120 x 60 x 60 cm

"<b>Extra große Größe</b>
 */


// Variablen 

inputProdukt = document.querySelector("#mylist");
console.log(inputProdukt);

button = document.querySelector("#button");

outputText = document.querySelector("#masse");


// Eventlistener
button.addEventListener("click", showtxt);


// Funktion showtxt()
function showtxt() {
    console.log(" in Funktion geht + EventListener geht")


    inputVergleich = Number(inputProdukt.value);
    console.log(inputVergleich);

    switch (inputVergleich) {
        case 0:
            outputErgebnis =      // Vorischt anstatt ""  `` nehmen ;-)
                `<b>Brief und Postkarte</b> <br>
            L: 10 - 23,5 cm
            B: 7 - 12,5 cm
            H: bis 1 cm`
            console.log(outputErgebnis);

            break;

        case 1:
            outputErgebnis =
                ` <b>DHL Paket 2 kg</b> <br>
        bis 60 x 30 x 15 cm `

            break;

        case 2:
            outputErgebnis = 
            ` <b>DHL Paket 5 kg</b> <br>
            bis 120 x 60 x 60 cm `

            break;

        case 3:
            outputErgebnis =
            ` <b>DHL Paket 10 kg</b> <br>
            bis 120 x 60 x 60 cm  `

            break;

        default:
            outputErgebnis =  ` <b>Extra große Größe</b> `
    }


    outputText.innerHTML = outputErgebnis;    // komisch geht nur wenn es so steht
    // wenn outputErgebnis = outputText.innerHTML   geht es nicht
    console.log(outputText.innerHTML);
}