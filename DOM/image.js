// document.addEventListener("DOMContentLoaded", loadImages);

const imageForm = document.getElementById("imageForm");
const gallery = document.getElementById("gallery");

imageForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const imageUrl = document.getElementById("imageUrl").value;
    const altText = document.getElementById("altText").value;

    if (imageUrl && altText) {
        addImage(imageUrl, altText);
        saveImageToLocalStorage(imageUrl, altText);
        imageForm.reset();
    }
});

function addImage(url, alt) {
    const div = document.createElement("div");
    div.classList.add("image-container");

    div.innerHTML = `
        <img src="${url}" alt="${alt}">
        <p>${alt}</p>
        <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    gallery.prepend(div);

    div.querySelector(".delete").addEventListener("click", function () {
        div.remove();
        removeImageFromLocalStorage(url);
    });

    div.querySelector(".edit").addEventListener("click", function () {
        const newUrl = prompt("Enter new Image URL:", url);
        const newAlt = prompt("Enter new Alt Text:", alt);

        if (newUrl && newAlt) {
            div.querySelector("img").src = newUrl;
            div.querySelector("img").alt = newAlt;
            div.querySelector("p").textContent = newAlt;
            updateImageInLocalStorage(url, newUrl, newAlt);
        }
    });
}

function saveImageToLocalStorage(url, alt) {
    let images = JSON.parse(localStorage.getItem("images")) || [];
    images.push({ url, alt });
    localStorage.setItem("images", JSON.stringify(images));
}

function loadImages() {
    let images = JSON.parse(localStorage.getItem("images")) || [];
    images.forEach(image => addImage(image.url, image.alt));
}

loadImages();

function removeImageFromLocalStorage(url) {
    let images = JSON.parse(localStorage.getItem("images")) || [];
    images = images.filter(image => image.url !== url);
    localStorage.setItem("images", JSON.stringify(images));
}

function updateImageInLocalStorage(oldUrl, newUrl, newAlt) {
    let images = JSON.parse(localStorage.getItem("images")) || [];
    images = images.map(image => 
        image.url === oldUrl ? { url: newUrl, alt: newAlt } : image
    );
    localStorage.setItem("images", JSON.stringify(images));
}
