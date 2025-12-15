
function switchBulb() {
    // 1. Seleziona l'elemento cerchio tramite il suo ID
    const bulb = document.getElementById('bulb-circle');
    
    // 2. Controllo di sicurezza: l'elemento esiste?
    if (bulb) {
        // 3. Logica Toggle: Se è giallo spegni, altrimenti accendi
        if (bulb.getAttribute('fill') === 'yellow') {
            bulb.setAttribute('fill', 'none');
        } else {
            bulb.setAttribute('fill', 'yellow');
        }
    } else {
        console.log("Errore: Elemento 'bulb-circle' non trovato.");
    }
}


///compiti
//1) SVG
/// creare un icona con tre linee orizzontale (Hamburger Icon)
/// cambiare il colore al passaggio del mouse
/// ruotarla al click
//2) P5.js
/// usare p5js per creare un community module da inviare al concorso per la mostra
/// (https://pcdcoimbra.dei.uc.pt/2026/)