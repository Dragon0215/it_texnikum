import { blogData } from "./blogData.js";

const postsParent = document.querySelector("#all-posts");

class Post {
  constructor(hasImg, imgSrc, title, author, date, starterText, index, parent) {
    this.hasImg = hasImg;
    this.imgSrc = imgSrc;
    this.title = title;
    this.author = author;
    this.date = date;
    this.starterText = starterText;
    this.index = index;
    this.parent = parent;
  }

  render() {
    this.parent.innerHTML += `
        <div class="post-item">
        ${this.hasImg ? `<div class="post-img"><img src="${this.imgSrc}" alt="img"></div>` : ""}
        <div class="post-main-info">
          <h4>${this.title}</h4>
          <div class="post-meta">
            <span><i class="far fa-user"></i> ${this.author}</span><span><i class="far fa-calendar"></i> ${
      this.date
    }</span>
          </div>
          <p>${this.starterText.substr(0, 180)}...</p>
          <a href="./posts/post-${this.index + 1}.html" class="btn-fill">Ba'tafsil</a>
        </div>
      </div> 
        `;
  }
}

blogData.forEach(({ hasImg, imgSrc, title, author, date, starterText }, index) => {
  new Post(hasImg, imgSrc, title, author, date, starterText, index, postsParent).render();
});
