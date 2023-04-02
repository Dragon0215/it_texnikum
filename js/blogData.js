export const blogData = [
  {
    hasImg: true,
    imgSrc: "./img/post-1.png",
    title: "The first post",
    author: "Ismatillo Arslanov",
    date: "05.04.2022",
    starterText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illo corrupti debitis recusandae hic,
    ipsa sit quas? Autem fuga nihil voluptate dolorum similique dignissimos quaerat quidem consectetur nobis
    aliquid quae voluptatibus ex assumenda, amet adipisci eveniet porro soluta accusamus voluptatem
    doloremque, nulla impedit, culpa hic. Natus ducimus cum eveniet aliquam architecto magnam? Ab atque
    necessitatibus esse, ipsum excepturi eligendi ipsam veritatis praesentium blanditiis molestias culpa
    natus hic ex sit iste voluptatem quas, asperiores ea rem molestiae delectus tempora fugit. Ad nihil
    vero, debitis fuga at nostrum modi! Expedita ab ex, dolores, fugit quis optio laborum sint, officiis
    molestiae temporibus ratione totam odio explicabo beatae voluptatem neque deleniti iusto eaque? `,
    getContent() {
      let text = `<h3 class="my-2">Lorem ipsum dolor sit amet.</h3>
      <p>${blogData[0].starterText}</p>
      <h6>Lorem ipsum dolor sit, amet consectetur adipisicing:</h6>
      <ul class="list-in-text">
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
      </ul>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit laudantium, labore inventore fugiat
        doloremque ab soluta at. Ex, corporis? Necessitatibus distinctio quam sed unde soluta delectus facilis,
        corporis iusto. Nihil modi eveniet laudantium quisquam a expedita est inventore doloremque, ad officiis
        odit earum alias asperiores. Nihil accusamus rerum delectus cumque ducimus illum temporibus ratione
        dolores quibusdam sint facere provident aperiam quis dignissimos reiciendis sed iure quidem eos quasi,
        nesciunt, ipsum voluptatem at debitis odio. Doloribus explicabo dignissimos nemo rerum sunt amet
        aspernatur distinctio, deleniti blanditiis cumque soluta officiis suscipit. Minima nesciunt dicta magnam
        aliquid inventore voluptates laudantium quaerat aperiam in.</p>
      <figure class="quote text-start">
        <blockquote class="blockquote">
          <p>A well-known quote, co ntained in a blockquote element.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ab est repudiandae quasi hic sapiente
        earum velit fuga odio neque numquam eligendi qui tenetur ipsam, animi atque expedita eaque nesciunt in.
        Quidem dignissimos totam aperiam inventore quae omnis commodi, modi obcaecati qui culpa dolor, rem
        dolorum maxime temporibus! Consequatur pariatur quibusdam aspernatur ea, assumenda non, illum, vitae sed
        temporibus consequuntur quam. Exercitationem ut ad beatae explicabo! Quod fuga culpa, consectetur ipsa
        assumenda, ut exercitationem fugiat commodi quibusdam quam natus iure impedit recusandae aliquam nihil
        vitae reprehenderit, facilis deleniti cum eveniet veritatis. Atque ut blanditiis quos excepturi
        perferendis a, quidem modi.</p>`;
      return text;
    },
  },
];
