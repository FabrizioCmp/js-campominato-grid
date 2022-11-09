// dichiarazioni costanti/variabili globali
const btnGenerate = document.querySelector(".btn_generate");
const difficultyEl = document.getElementById("difficulty");


// al click del bottone genera il campo richesto
btnGenerate.addEventListener("click", function(){
    generateCampo(parseInt(difficultyEl.value));
})

// DICHIARAZIONE FUNZIONI *************************
/**
 * genera campo con numero di caselle totali specificato
 * @param {number} numCelle -caselle totali
 */
function generateCampo(numCelle){
    const campoEl = document.querySelector(".campo");
    const cellePerRiga = Math.sqrt(numCelle);

    campoEl.innerHTML = "";

    for(let i = 0; i < numCelle; i++){
        const newCell = document.createElement("div");


        campoEl.append(newCell);

        newCell.style.width = `calc(100% / ${cellePerRiga})`;
        newCell.classList.add(`cella`);
        newCell.innerHTML = `<div>${i+1}</div>`;

        newCell.addEventListener("click", function(){
            this.classList.add(`bkg_click`);
            console.log(`hai cliccato la casella numero ${i+1}`);
        })
    }
}