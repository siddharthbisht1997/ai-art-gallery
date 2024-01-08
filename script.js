function createFigureItem(imageName) {
    let figure = document.createElement('figure');
    figure.className = "gallery-item";


    let img = document.createElement('img');
    img.className = "gallery-item__image";
    img.src = "images/" + imageName;

    figure.appendChild(img);

    return figure;
}

const figureList = document.getElementById('#ai_gallery');

fetch("./artworks.txt")
    .then((res) => res.text())
    .then((text) => {
        text.split("\n").forEach(element => {
            figureList.appendChild(createFigureItem(element));
        });
    })
    .catch((e) => console.error(e));
