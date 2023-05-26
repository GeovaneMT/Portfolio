const buttonDropdown = document.querySelector(".button_header");
const menuDropdown = document.querySelector(".menu_header");

buttonDropdown.addEventListener("click", () => {
  menuDropdown.classList.toggle("active");
});

const menuLinks = Array.from(document.querySelectorAll(".menu_header a"));
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuDropdown.classList.remove("active");
  });
});

const cursoButton = Array.from(document.querySelector(".bloco_button").children);
const cursos = Array.from(document.querySelector(".container_qualificacoes").children);
const educacao = document.querySelector(".educacao");

function hideCursos() {
  cursos.forEach((curso) => {
    curso.style.display = "none";
  });
  cursoButton.forEach((button) => {
    button.classList.remove("ativo");
  });
}

function showCurso(id) {
  const cursoCurrent = document.querySelector("#" + id);
  cursoCurrent.style.display = "block";
}

function selectCurso() {
  cursoButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      hideCursos();
      const cursoAtual = event.currentTarget;
      showCurso(cursoAtual.dataset.id);
      cursoAtual.classList.add("ativo");
    });
  });
}

function execute() {
  hideCursos();
  selectCurso();
  educacao.click();
}

window.addEventListener("load", execute);

const botaoCopiar = document.querySelectorAll(".botaoCopiar");
botaoCopiar.forEach((item) => {
  item.addEventListener("click", () => {
    navigator.clipboard.writeText(item.value)
      .then(() => {
        item.id = "email-copiado_check";
        item.textContent = "Email copiado";
      })
      .catch((error) => {
        console.error("Failed to copy email:", error);
      });

    setTimeout(() => {
      item.id = "";
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
  var isScrollingUp = false;

  function toggleHeader() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      if (!isScrollingUp) {
        header.classList.add("show-header");
        header.classList.remove("hide-header");
        botaoTopo.style.opacity = "1";
        botaoTopo.style.transform = "translateY(-3.2rem) translateX(-50%)";
        isScrollingUp = true;
      }
    } else if (currentScrollPos > 0) {
      if (isScrollingUp) {
        header.classList.add("hide-header");
        header.classList.remove("show-header");
        botaoTopo.style.opacity = "0";
        botaoTopo.style.transform = "translateY(10rem) translateX(-50%)";
        isScrollingUp = false;
      }
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
  var footer2 = document.getElementById("other-footer");
  var content = document.querySelector("main");

  function toggleFooter(footer) {
    var contentHeight = content.offsetHeight;
    var yOffset = window.pageYOffset;
    var windowHeight = window.innerHeight;
    var footerHeight = footer.offsetHeight;

    if (yOffset === 0 || yOffset + windowHeight >= contentHeight - footerHeight) {
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

  function handleResize() {
    toggleFooter(footer1);
    toggleFooter(footer2);
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
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

  function handleResize() {
    toggleBotaoTopo();
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
});


/*_________________________________________________________________________*/

window.addEventListener('scroll', debounce(function() {
  var parallax = document.querySelector('.section_mainbg');
  var scrollPosition = window.pageYOffset;
  parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
  parallax.style.transform = 'translateY(' + scrollPosition * -0.3 + 'px)';
}, 10));

// Debounce function to optimize performance
function debounce(func, delay) {
  var timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}



/*_________________________________________________________________________*/

window.addEventListener('load', function() {
  const loadingScreen = document.querySelector('.loading-screen');
  const minimumTime = 2300; // 2 seconds

  // Show the loading screen initially
  loadingScreen.style.display = 'flex';

  // Calculate the remaining time to reach the minimum time
  const loadTime = Date.now() - window.performance.timing.navigationStart;
  const remainingTime = Math.max(0, minimumTime - loadTime);

  // Delay hiding the loading screen until the minimum time has passed
  setTimeout(function() {
    loadingScreen.style.opacity = '0';

    // Set a new timeout to change the display property after a transition
    setTimeout(function() {
      loadingScreen.style.display = 'none';
    }, 300); // 0.3 seconds (adjust as needed)
  }, remainingTime);
});


