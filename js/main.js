const btnGenerate = document.querySelector(".btn_generate");


btnGenerate.addEventListener("click", function(){
    generateCampo(100);
})


function generateCampo(numCelle){
    const campoEl = document.querySelector(".campo");
    const cellePerRiga = Math.sqrt(numCelle);

    campoEl.innerHTML = "";

    for(let i = 0; i < numCelle; i++){
        const newCell = document.createElement("div");


        campoEl.append(newCell);

        newCell.style.width = `calc(100% / ${cellePerRiga})`;
        newCell.classList.add(`cella`);
        newCell.innerHTML = i+1;

        newCell.addEventListener("click", function(){
            this.classList.add(`bkg_click`);
            console.log(`hai cliccato la casella numero ${i+1}`);
        })
    }
}