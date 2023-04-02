import fs from "fs";
import path from "path";

import { blogData } from "./blogData.js";

blogData.forEach(({ hasImg, imgSrc, title, author, date, getContent }, index) => {
  index++;
  const direction = path.join("posts", `post-${index}.html`);

  fs.writeFileSync(
    direction,
    `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<link rel="shortcut icon" href="../img/Logo/Secondary 1.svg" type="image/x-icon">
<link href="../libs/bootstrap.css" rel="stylesheet">
<script src="https://kit.fontawesome.com/0e035b9984.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="../css/main.css">
</head>

<body>

<!-- to top -->

  <div class="to-top deactive">
    <a href="#top"><i class="fas fa-arrow-up"></i></a>
  </div>

  <!-- sign up -->

  <div class="sign-up">
    <div class="wrapper deactive">
      <div class="icon"><img src="../img/icon/sign-up.png" alt=""></div>
      <a href="https://t.me/ITtexnikumandijonBot">Ro'yxatdan o'tish</a>
    </div>
  </div>

  <!-- contact address -->

  <div class="extra-contact" id="top">
    <div class="subnav-number">
      <a href="mailto://ittexnikum@gmail.com">ittexnikum@gmail.com</a>
      <span>|</span>
      <a href="tel:998999999999">+998 98 998 98 98</a>
    </div>
    <div class="subnav-icon">
      <img src="../img/icon/uz (flag).png" alt="img">
      <img src="../img/icon/uz (emblem).png" alt="img">
    </div>
  </div>


  <!-- navbar -->
  <nav class="navigation-bar">
    <div class="logo">
      <a href="../index.html"><img src="../img/Logo/Primary 1.svg" alt="logo"></a>
    </div>
    <div class="navigations">
      <ul class="navs">
        <li class="link">
          <a href="../index.html">Bosh Sahifa</a>
        </li>
        <li class="link">
          <a href="../about.html">Biz Haqimizda</a>
        </li>
        <li class="link">
          <a class="active" href="../blog.html">Blog</a>
        </li>
        <li class="link">
          <a href="../contact.html">Aloqa</a>
        </li>
        <li class="lang">
          <ul class="social-links">
            <li>
              <div id="lang-form">
                <div id="language-selected" class="dropdownbox">UZ &#9662;</div>
                <div id="dropdown-wrapper">
                  <ul name="lang" id="select-language-menu" class="menu">
                    <li class="selected">
                      UZ
                      <div class="lang-code" style="display: none;">uz &#9662;</div>
                    </li>
                    <li>
                      ENG
                      <div class="lang-code" style="display: none;">eng &#9662;</div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div class="hamburger">
        <img src="../img/icon/menu.png" alt="menu" class="menu-btn block">
        <img src="../img/icon/close.png" alt="close" class="close-btn none">
      </div>
    </div>
  </nav>

  <main>
  <div class="history">
      <ul>
        <li class="link"><a href="../index.html">Bosh Sahifa</a></li>
        <span>-></span>
        <li class="link"><a href="../blog.html">Blog</a></li>
        <span>-></span>
        <li class="here"><span>${title}</span></li>
      </ul>
  </div>
    <div class="container">
      <div class="row py-5">
        <div class="main col-lg-10 offset-1">
          <div class="single-post mt-2">
            <h2>${title}</h2>
            <div class="post-meta text-muted">
              <span><i class="far fa-user"></i> ${author}</span><span><i class="far fa-calendar"></i> ${date}</span>
            </div>
            ${hasImg ? `<div class="post-img my-3"><img src=".${imgSrc}" alt="img"></div>` : ""}
            <div class="post-content">
              ${getContent()}
              <div class="navigation mt-5">
                ${
                  index === 1
                    ? "<span></span>"
                    : `<a href="./post-${index - 1}.html" class="prev">
                      <i class="fas fa-chevron-left"></i> Oldingi
                    </a>`
                }
                ${
                  index === blogData.length
                    ? "<span></span>"
                    : `<a href="./post-${index + 1}.html" class="next">Keyingi <i class="fas fa-chevron-right"></i></a>`
                }
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer id="footer container-fluid">
    <div class="container">
      <div class="footer-wrap">
        <div class="links">
          <h6 class="fw-bold">Tezkor havolalar</h6>
          <p><a href="../about.html">Biz haqimizda</a></p>
          <p><a href="../about.html#directions">Yo'nalishlar</a></p>
          <p><a href="../contact.html">A'loqa</a></p>
        </div>

        <div class="about" style="text-align: center;">
          <img src="../img/Logo/Secondary 1.svg" alt="Logo">
          <p class="text-muted py-2" style="text-transform: capitalize;">
            Andijon axborot texnologiyalar texnikumining rasmiy sayti.
          </p>
        </div>

        <div class="links">
          <h6 class="fw-bold">Tezkor havolalar</h6>
          <p><a href="../index.html#statistics">Statistika</a></p>
          <p><a href="../blog.html">Blog</a></p>
        </div>
      </div>
    </div>
    <div class="copyright container">
      <p><span id="copyright"></span> | Texnikum</b></p>
      <div class="social-media">
        <div class="wrapper">
          <div class="icon facebook">
            <div class="tooltip">Facebook</div>
            <span><i class="fab fa-facebook-f"></i></span>
          </div>
          <div class="icon instagram">
            <div class="tooltip">Instagram</div>
            <span><i class="fab fa-instagram"></i></span>
          </div>
          <div class="icon telegram">
            <div class="tooltip">Telegram</div>
            <span><i class="fab fa-telegram"></i></span>
          </div>
        </div>
      </div>
    </div>
  </footer>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="../js/main.js"></script>
</body>

</html>`,
    (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    }
  );
});
