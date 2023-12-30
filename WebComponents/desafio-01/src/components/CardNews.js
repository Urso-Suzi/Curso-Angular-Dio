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
        shadow.appendChild(this.styles());
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
        cardRigth.setAttribute("class", "card__rigth");
        //elementos do cardRigth
        const newsImage = document.createElement("img");
        newsImage.setAttribute("class", "imagem");
        
        newsImage.src = (this.getAttribute("photo") || "./assets/gato.jpg")


        cardRigth.appendChild(newsImage);








        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRigth);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
               
.card {
    width: 80%;
    display: flex;
    flex-direction: row;
    box-shadow: 6px 8px 25px 3px rgba(0,0,0,0.59);
    -webkit-box-shadow: 6px 8px 25px 3px rgba(0,0,0,0.59);
    -moz-box-shadow: 6px 8px 25px 3px rgba(0,0,0,0.59);
    justify-content: space-between;
}

.imagem {
    width: 200px;
    height: 130px;
}



.card__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
}

.card__left > span {
    font-weight: 400;
}

.card__left > a{
    margin-top: 15px;
    font-size: 25px;
    color: black;
    text-decoration: none;
    font-weight: bold;
}

.card__left > p {
    color: gray;
} 
        `
        return style;
    }
}

customElements.define("card-news", CardNews)