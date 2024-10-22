const listaLinks = [
    "peZa5TKKc4D9ZGpm",
    "INnXkoJwV0M",
    "DH72gRefp-E",
    "C2S1cJIcYus",
    "gc5MPP3ILHU"
]

let randomIndex = Math.floor(Math.random() * listaLinks.length);
let linkEscolhido = arr[randomIndex];

function selecionarVideo(linkEscolhido){
    let videoPrincipal = document.getElementById("principal")
    videoPrincipal.src = `https://www.youtube.com/embed/gSWFF1dQTIs?si=${linkEscolhido}`

    let novaLista = listaLinks.slice()
    let indiceRemover = novaLista.indexOf(linkEscolhido)
    novaLista.splice(indiceRemover, 1)
    console.log(novaLista)


    for( let i = 0; i < 3; i++){
        const frame = document.createElement("img");
        frame.src = `https://img.youtube.com/vi/${novaLista[i]}/maxresdefault.jpg`
    }
}

selecionarVideo(linkEscolhido)

