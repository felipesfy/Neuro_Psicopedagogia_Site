let atividades = JSON.parse(localStorage.getItem("atividades")) || [];

function salvar() {
  localStorage.setItem("atividades", JSON.stringify(atividades));
}

function renderizar() {

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  atividades.forEach((item, index) => {

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${item.titulo}</h3>
      <p>${item.descricao}</p>
      <button onclick="remover(${index})">Excluir</button>
    `;

    lista.appendChild(div);
  });

}

function adicionar(){

  const titulo = document.getElementById("titulo").value;
  const descricao = document.getElementById("descricao").value;

  if(!titulo || !descricao){
    alert("Preencha todos os campos");
    return;
  }

  atividades.push({
    titulo,
    descricao
  });

  salvar();
  renderizar();

  document.getElementById("titulo").value = "";
  document.getElementById("descricao").value = "";
}

function remover(index){
  atividades.splice(index,1);
  salvar();
  renderizar();
}

renderizar();