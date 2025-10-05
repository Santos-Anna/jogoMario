function mostrarMenuMusica(event) {
  event.preventDefault(); // evita recarregar
  document.getElementById("ContainerMusica").style.display = "flex";
}
function fecharMenuMusica(event) {
  event.preventDefault(); // evita recarregar
  document.getElementById("ContainerMusica").style.display = "none";
}
 let personagemSelecionado = null;

    function abrirMenuPersonagem() {
      document.getElementById("menuPersonagem").style.display = "block";
    }

    function fecharMenuPersonagem() {
      document.getElementById("menuPersonagem").style.display = "none";
    }

    function escolherPersonagem(nome, elemento) {
      let todos = document.querySelectorAll('.personagem');
      todos.forEach(p => p.classList.remove('selecionado'));

      elemento.classList.add('selecionado');

      
      personagemSelecionado = nome;

  
      document.getElementById("personagemEscolhido").innerText =
        "Você escolheu: " + nome;
    }