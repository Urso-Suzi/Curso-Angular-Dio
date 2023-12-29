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
        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");


        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);






        const cardRigth = document.createElement("div");
        cardLeft.setAttribute("class", "card__rigth");
        //elementos do cardRigth
        const newsImage = document.createElement("img");


        cardRigth.appendChild(newsImage);








        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRigth);

        return componentRoot;
    }

    styles() {}
    

}

customElements.define("card-news", CardNews)