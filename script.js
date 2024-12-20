// Lista de links dos meus vídeos

const listaLinks = [
    "gSWFF1dQTIs",
    "INnXkoJwV0M",
    "DH72gRefp-E",
    "C2S1cJIcYus",
    "gc5MPP3ILHU"
]

// Objeto com as chaves sendo meus links e o incorporar associado

const linkIncorporar = {
    "gSWFF1dQTIs":"https://www.youtube.com/embed/gSWFF1dQTIs?si=VRhJg9yT7t5pHem20",
    "INnXkoJwV0M":"https://www.youtube.com/embed/INnXkoJwV0M?si=XnKK9B0EC1zHXmIs",
    "DH72gRefp-E":"https://www.youtube.com/embed/DH72gRefp-E?si=YCqcnZr6wtqb-EN7",
    "C2S1cJIcYus":"https://www.youtube.com/embed/C2S1cJIcYus?si=5EQk4Ig8HrJN3Q0o",
    "gc5MPP3ILHU":"https://www.youtube.com/embed/gc5MPP3ILHU?si=qZsh_jWJYYohRaCS"
}

// Selecionando um valor aleatório inicialmente

let randomIndex = Math.floor(Math.random() * listaLinks.length);
let linkEscolhido = listaLinks[randomIndex];



function selecionarVideo(linkEscolhido){

    // Selecionando o vídeo principal
    let videoPrincipal = document.getElementById("principal")
    videoPrincipal.animate(
      [
        // keyframes
        { transform: "scale(1)"},
        { transform: "scale(0.1)" },
      ],
      {
        // timing options
        duration: 1000,
        iterations: 1,
      },
    );
    videoPrincipal.style.transform = "scale(0.1)"
    videoPrincipal.src = linkIncorporar[linkEscolhido]

    setTimeout(() =>{

      // Alterando o link do incorporar principal
      videoPrincipal.animate(
        [
          // keyframes
          { transform: "scale(0.1)"},
          { transform: "scale(1)" },
        ],
        {
          // timing options
          duration: 1000,
          iterations: 1,
        },
      ) 
      videoPrincipal.style.transform = "scale(1.0)"
    }, 1000)



    // Clonando minha lista original e removendo o principal
    let novaLista = listaLinks.slice()
    let indiceRemover = novaLista.indexOf(linkEscolhido)
    novaLista.splice(indiceRemover, 1)

    // Resetando o vídeos secundários
    let videosSecundarios = document.getElementById("opcoes")
    videosSecundarios.innerHTML = ""

    // Criando novos elementos/imagens para usar no site
    for( let i = 0; i < 4; i++){
        const frame = document.createElement("img");
        frame.src = `https://img.youtube.com/vi/${novaLista[i]}/maxresdefault.jpg`
        frame.id = novaLista[i]
        // Adicionando o evento onclick chamando recursivamente a função selecionar vídeo
        frame.onclick = () => {selecionarVideo(frame.id)}
        videosSecundarios.appendChild(frame)
    }
}

// Selecionando o primeiro vídeo
selecionarVideo(linkEscolhido)

