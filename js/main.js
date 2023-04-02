window.addEventListener("DOMContentLoaded", function () {
  // navbar
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navigation-bar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
  });

  const menu = document.querySelector(".navigations .navs");
  const openBtn = document.querySelector(".navigations .menu-btn");
  const closeBtn = document.querySelector(".navigations .close-btn");

  openBtn.addEventListener("click", () => {
    menu.classList.remove("hamburger-disable");
    menu.classList.add("hamburger-active");
    openBtn.classList.replace("block", "none");
    closeBtn.classList.replace("none", "block");
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("hamburger-active");
    menu.classList.add("hamburger-disable");
    closeBtn.classList.replace("block", "none");
    openBtn.classList.replace("none", "block");
    document.body.style.overflow = "visible";
  });

  // loader
  // const loader = document.querySelector(".loader");

  // setTimeout(() => {
  //   loader.classList.replace("active", "deactive");
  //   setTimeout(() => {
  //     loader.style.display = "none";
  //   }, 500);
  // }, 1000);
  // navbar
  const navbar = document.querySelector(".navigation-bar"),
    toTopBtn = document.querySelector(".to-top");
  window.addEventListener("scroll", () => {
    // navbar
    navbar.classList.toggle("sticky", window.scrollY > 0);
    // to top btn
    if (window.scrollY < 100) {
      toTopBtn.classList.replace("active", "deactive");
    } else {
      toTopBtn.classList.replace("deactive", "active");
    }
  });

  // lang

  if ($("#language-selected").is(":empty")) {
    $(".menu li").each(function () {
      if ($(this).attr("class") == "selected") {
        var selected = $(this).find(".lang-code").html().toUpperCase();
        $("#language-selected").html(selected);
      }
    });
  }

  $(".dropdownbox").click(function () {
    $(".menu").toggleClass("showMenu");
    $(".menu > li").click(function () {
      var selected = $(this).find(".lang-code").html().toUpperCase();
      $("#language-selected").html(selected);
      $(".menu").removeClass("showMenu");
    });
  });

  $("#dropdown-wrapper").mouseleave(function () {
    $(".menu").removeClass("showMenu");
  });

  // sign up
  const signUpIcon = document.querySelector(".sign-up .wrapper .icon"),
    signUpWrapper = document.querySelector(".sign-up"),
    signUp = document.querySelector(".sign-up .wrapper");

  signUpIcon.addEventListener("mouseover", () => {
    signUpWrapper.addEventListener("mouseover", () => {
      signUp.classList.replace("deactive", "active");
    });
  });

  signUpIcon.addEventListener("mouseleave", () => {
    signUpWrapper.addEventListener("mouseleave", () => {
      signUp.classList.replace("active", "deactive");
    });
  });
  // copyright

  const copyright = document.querySelector("#copyright");
  copyright.innerHTML = `&copy; ${new Date().getFullYear()}`;
});
