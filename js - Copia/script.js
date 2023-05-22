const buttonDropdown = document.querySelector(".button_header");
const menuDropdown = document.querySelector(".menu_header");
buttonDropdown.addEventListener("click", () => menuDropdown.classList.toggle("active"));

const cursoButton = [...document.querySelector(".bloco_button").children];
const cursos = [...document.querySelector(".container_qualificacoes").children];
const educacao = document.querySelector(".educacao");

function esconderCursos() {
  cursos.forEach((curso) => {
    curso.style.display = "none";
  });
  cursoButton.forEach((button) => {
    button.classList.remove("ativo");
  });
}

function cursoTarget(id) {
  const cursoCurrent = document.querySelector("#" + id);
  cursoCurrent.style.display = "block";
}

function selecionarCurso() {
  cursoButton.forEach((button) => {
    button.addEventListener("click", (target) => {
      esconderCursos();
      const cursoAtual = target.currentTarget;
      cursoTarget(cursoAtual.dataset.id);
      cursoAtual.classList.add("ativo");
    });
  });
}

function execute() {
  esconderCursos();
  selecionarCurso();
  educacao.click();
}

window.addEventListener("load", execute());

const botaoCopiar = document.querySelectorAll(".botaoCopiar");
botaoCopiar.forEach((item) => {
  item.addEventListener("click", () => {
    if (navigator.clipboard.writeText(item.value)) {
      item.id = "email-copiado_check";
      item.textContent = "Email copiado";
    }

    setInterval(() => {
      item.id = "email-copiado_check";
      item.textContent = "Copiar email";
    }, 3000);
  });
});

/*____________________________menu open________________________________________________________________*/

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");
  var content = document.querySelector("main");
  var botaoTopo = document.querySelector(".botao_topo");

  var prevScrollPos = window.pageYOffset;

  function toggleHeader() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      header.classList.add("show-header");
      header.classList.remove("hide-header");
      botaoTopo.style.opacity = "1"; // Show the element
      botaoTopo.style.height = "40px"; // Set the desired height
    } else if (currentScrollPos > 0) {
      header.classList.add("hide-header");
      header.classList.remove("show-header");
      botaoTopo.style.opacity = "0"; // Hide the element
      botaoTopo.style.height = "0"; // Set height to 0
    }

    prevScrollPos = currentScrollPos;
  }

  function handleScroll() {
    toggleHeader();
  }

  window.addEventListener("scroll", handleScroll);
});

/*______________________page scroll button_____________________________*/

document.addEventListener("DOMContentLoaded", function () {
  var footer1 = document.getElementById("bar");
  var content = document.querySelector("main");

  function toggleFooter(footer) {
    var contentHeight = content.offsetHeight;
    var yOffset = window.pageYOffset;
    var windowHeight = window.innerHeight;
    var footerHeight = footer.offsetHeight;

    if (yOffset === 0) {
      footer.classList.add("show-footer");
      footer.classList.remove("hide-footer");
    } else if (yOffset + windowHeight >= contentHeight - footerHeight) {
      footer.classList.add("show-footer");
      footer.classList.remove("hide-footer");
    } else {
      footer.classList.add("hide-footer");
      footer.classList.remove("show-footer");
    }
  }

  function handleScroll() {
    toggleFooter(footer1);
    toggleFooter(footer2);
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
});

/*____________________bars hidden_______________________________*/

document.addEventListener("DOMContentLoaded", function () {
  var botaoTopo = document.getElementById("botao_topo");

  function toggleBotaoTopo() {
    var yOffset = window.pageYOffset;

    if (yOffset === 0) {
      botaoTopo.classList.add("hide-button");
      botaoTopo.classList.remove("show-button");
    } else {
      botaoTopo.classList.add("show-button");
      botaoTopo.classList.remove("hide-button");
    }
  }

  function handleScroll() {
    toggleBotaoTopo();
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
});
