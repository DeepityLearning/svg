// sketch.js

function setup() {
  // Crea un canvas 500x500 (formato standard per moduli quadrati)
  createCanvas(500, 500);
  
  // Imposta il modo angolare in gradi per facilitare i calcoli
  angleMode(DEGREES);
  
  // Imposta il rettangolo per essere disegnato dal centro
  rectMode(CENTER);
  
  // Disegna solo una volta (statico), non in loop continuo
  noLoop(); 
}

function draw() {
  background(20); // Sfondo quasi nero (#141414)
  
  let cells = 10; // Griglia 10x10
  let s = width / cells; // Dimensione di ogni cella (50px)
  
  // Definizione colori del progetto
  let cYellow = color(255, 255, 0); // Giallo acceso (stile Bulb)
  let cWhite = color(255);          // Bianco
  
  strokeWeight(s * 0.15); // Spessore della linea
  noFill(); // Nessun riempimento per le forme

  // Doppio ciclo for per attraversare la griglia
  for (let x = 0; x < width; x += s) {
    for (let y = 0; y < height; y += s) {
      push(); // Salva lo stato di trasformazione corrente
      translate(x + s / 2, y + s / 2); // Sposta l'origine al centro della cella
      
      // Rotazione casuale (0, 90, 180, 270 gradi)
      let r = floor(random(4));
      rotate(r * 90);
      
      // Scelta del colore (70% probabilità giallo, 30% bianco)
      if (random(1) > 0.3) {
        stroke(cYellow);
      } else {
        stroke(cWhite);
      }

      // Scelta casuale della forma da disegnare
      let shapeType = floor(random(2)); // Genera 0 o 1

      if (shapeType === 0) {
        // Forma A: Due archi opposti (crea percorsi curvi)
        arc(-s / 2, -s / 2, s, s, 0, 90);
        arc(s / 2, s / 2, s, s, 180, 270);
      } else {
        // Forma B: Linea retta e cerchio (crea connessioni e nodi)
        line(-s/2, 0, s/2, 0);
        strokeWeight(s * 0.25); // Nodo leggermente più spesso
        point(0,0); 
        strokeWeight(s * 0.15); // Ripristina spessore
      }
      
      pop(); // Ripristina lo stato precedente
    }
  }
}

// Funzione extra: Salva l'immagine cliccando sul canvas
function mousePressed() {
  // Controlla se il click è avvenuto dentro il canvas
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    saveCanvas('community_module_output', 'png');
    // Genera un nuovo pattern dopo il salvataggio
    redraw();
  }
}
