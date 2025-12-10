function switchBulb(){
    const bulb = document.getElementById('bulb-circle');
    console.log(bulb)
    if(bulb.getAttribute('fill') === 'yellow'){
        bulb.setAttribute('fill', 'none')
    } else {
        bulb.setAttribute('fill', 'yellow')
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