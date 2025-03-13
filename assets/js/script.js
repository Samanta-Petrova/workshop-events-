/*1. Anvende javascript til at skifte farven i de sociale elementer til en mere passende farve (jeres vurdering) */
// Emelia
const socialeColor = document.querySelectorAll('.fa');
for (i = 0; i < socialeColor.length; i++) {
    socialeColor[i].style.color = '#8d5607';
}
//

/*2. Se den lidt skæve h1 i header - sørg for den ved hover "shaker"/ryster sig lidt. I bedes anvende javascript til at løse denne opgave - måske i kombination med css. Der findes endda js libraries/biblioteker I kan se på til formålet, f.eks. anime.js */
// Debbie
//

   // Get references to the h1
        const h1El = document.querySelector('h1');
   
        // Add an event listener
        h1El.addEventListener('mouseover', () => {
            // Add the 'shake' class to the h1 to trigger the animation
            h1El.classList.add('shake');

            // Remove the 'shake' class after the animation ends (to allow it to be triggered again)
            setTimeout(() => {
                h1El.classList.remove('shake');
            }, 500); // Duration of the shake animation (500ms)
        });

/*3. Brug javascript til at skifte billedet ud i .bigPicture-boksen, brug dette eller noget helt andet: https://cdn.pixabay.com/photo/2017/09/28/13/18/amusement-2795490_960_720.jpg */
// Samanta
//

/*4. Brug javascript til at indsætte et favicon - f.eks. det her http://hearthstoneapi.com/favicon.ico (I know...hvorfor ville man nogensinde gøre det irl...men for øvelsens skyld) */
//Thomas
//

/*5.1 Brug javascript til at gemme teksterne væk i artiklerne <p>-tags. Indsæt istedet link med "Læs mere..." */
//
//

/*5.2. Sørg for at når man trykker på "Læs mere..." vises den oprindelige tekst ovenover "Læs mere..."  */
//
//

/*5.3. Sørg for at "Læs mere..." bliver lavet om til "Læs mindre..." */
//
//

/*6. Som I måske har lagt mærke til, er der en .crazyPopup box som står udenfor body (se i css...prøv f.eks. at ændre property "right" til value -200 og 0). Opgaven er at den nu "popper up" når personer har scrollet 100px ned og forsvinde igen når de scroller op under 100px igen  - lookie: https://drive.google.com/file/d/10aSqzcL3br8DU5AhggE54Pal0Z3s-x5y/view */
//
//
