const listaLinks = [
    "gSWFF1dQTIs",
    "INnXkoJwV0M",
    "DH72gRefp-E",
    "C2S1cJIcYus",
    "gc5MPP3ILHU"
]

const linkIncorporar = {
    "gSWFF1dQTIs":"https://www.youtube.com/embed/gSWFF1dQTIs?si=VRhJg9yT7t5pHem20",
    "INnXkoJwV0M":"https://www.youtube.com/embed/INnXkoJwV0M?si=XnKK9B0EC1zHXmIs",
    "DH72gRefp-E":"https://www.youtube.com/embed/DH72gRefp-E?si=YCqcnZr6wtqb-EN7",
    "C2S1cJIcYus":"https://www.youtube.com/embed/C2S1cJIcYus?si=5EQk4Ig8HrJN3Q0o",
    "gc5MPP3ILHU":"https://www.youtube.com/embed/gc5MPP3ILHU?si=qZsh_jWJYYohRaCS"
}


let randomIndex = Math.floor(Math.random() * listaLinks.length);
let linkEscolhido = listaLinks[randomIndex];

function selecionarVideo(linkEscolhido){
    let videoPrincipal = document.getElementById("principal")
    videoPrincipal.src = linkIncorporar[linkEscolhido]
    console.log(videoPrincipal.src)

    let novaLista = listaLinks.slice()
    let indiceRemover = novaLista.indexOf(linkEscolhido)
    novaLista.splice(indiceRemover, 1)

    let videosSecundarios = document.getElementById("opcoes")
    videosSecundarios.innerHTML = ""
    for( let i = 0; i < 4; i++){
        const frame = document.createElement("img");
        frame.src = `https://img.youtube.com/vi/${novaLista[i]}/maxresdefault.jpg`
        frame.id = novaLista[i]
        frame.onclick = () => {selecionarVideo(frame.id)}
        videosSecundarios.appendChild(frame)
    }
}

selecionarVideo(linkEscolhido)

