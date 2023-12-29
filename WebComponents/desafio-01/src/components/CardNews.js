// class CardNews extends HTMLElement {
//     constructor () {
//         super();

//         const shadow = this.attachShadow({mode: "open"});
//         shadow.innerHTML = "<h1>Hello Wolrd</h1>"
//     }
// }



// customElements.define('card-news', CardNews)


class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");
        //elementos do cardLeft
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous")

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = (this.getAttribute("link-url") || "facebook.com")


        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);






        const cardRigth = document.createElement("div");
        cardLeft.setAttribute("class", "card__rigth");
        //elementos do cardRigth
        const newsImage = document.createElement("img");
        newsImage.src = (this.getAttribute("photo") || "./assets/gato.jpg")


        cardRigth.appendChild(newsImage);








        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRigth);

        return componentRoot;
    }

    styles() {}
    

}

customElements.define("card-news", CardNews)