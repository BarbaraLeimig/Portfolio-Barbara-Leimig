// Interação javascript utilizando JQuery

$(document).ready(function () {
  const navbar = $(".navbar");
  const mobileNavbar = $(".navbar__mobile");
  const button = $(".burguer");

  // Adicionando evento de click no botão menu hambúrguer na navbar do modo mobile
  button.on("click", function () {
    mobileNavbar.toggleClass("active");
  });

  // Adicionando evento de scroll na navbar para aplicar o sombreamento quando a distô do scrollTop for > 0
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
      navbar.addClass("active");
    } else {
      navbar.removeClass("active");
    }
  });

  // Mudando a cor do botão quando o cursor estiver sobre o mesmo
  $(".btn").hover(
    function () {
      $(this).css("background-color", "var(--dark-secondary-color)");
    },
    function () {
      $(this).css("background-color", "var(--secondary-color)");
    }
  );
});
