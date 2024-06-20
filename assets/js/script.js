document.addEventListener("DOMContentLoaded", function () {
  // Chama as funções para criar header e footer
  createHeader();
  createFooter();

  // Teste para verificar se os elementos foram adicionados
  let footer = document.querySelector("#footer");
  console.log(footer.textContent);

  let header = document.querySelector("header");
  console.log(header);
});

// Função para criar o header
function createHeader() {
  // Cria o elemento header
  let header = document.createElement("header");

  // Cria o elemento nav
  let nav = document.createElement("nav");

  // Cria o elemento ul
  let ul = document.createElement("ul");

  // Lista de links
  let links = [
    { href: "./index.html", text: "Sobre mim" },
    { href: "./projetos.html", text: "Projetos" },
    { href: "./curriculo.html", text: "Currículo" },
    { href: "./contato.html", text: "Contato" },
  ];

  // Cria os elementos li e a para cada link
  links.forEach((link) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    li.appendChild(a);
    ul.appendChild(li);
  });

  // Adiciona ul ao nav
  nav.appendChild(ul);

  // Cria o container de imagem
  let imgContainer = document.createElement("div");
  imgContainer.className = "img-container";

  // Cria o elemento img
  let img = document.createElement("img");
  img.src = "./assets/img/perfil_redonda_laranja.png";

  // Adiciona img ao container de imagem
  imgContainer.appendChild(img);

  // Adiciona nav e imgContainer ao header
  header.appendChild(nav);
  header.appendChild(imgContainer);

  // Adiciona o header ao corpo do documento
  document.body.insertBefore(header, document.body.firstChild);
}

// Função para criar o footer
function createFooter() {
  // Cria o elemento footer
  let footer = document.createElement("footer");
  footer.className = "footer";
  footer.id = "footer";

  // Cria o parágrafo dentro do footer
  let paragraph = document.createElement("p");
  paragraph.textContent = "Desenvolvido por Marlon Prado. Todos direitos reservados. 2024 ©";

  // Adiciona o parágrafo ao footer
  footer.appendChild(paragraph);

  // Adiciona o footer ao corpo do documento
  document.body.appendChild(footer);
}
