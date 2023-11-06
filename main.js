const lista_spesa = ["latte" , "pane" , "zucchine" , "patate"];
const div = document.getElementById("lista");

const ul = document.createElement("ul");
div.append(ul);

let contatore = 0;
while(contatore < lista_spesa.length){
    const elemento = document.createElement("li");
    elemento.innerHTML = lista_spesa[contatore];
    ul.append(elemento);
    contatore++;
}