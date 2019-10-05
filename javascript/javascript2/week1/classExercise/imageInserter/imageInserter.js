
function ImageInserter(imageUrl, elementToAppendImageTo) {
    // Create <img> element
    const imgTag = document.createElement("img");
    // Set the src
    imgTag.setAttribute("src", imageUrl);
    // Append the <img> to the <body>
    elementToAppendImageTo.appendChild(imgTag);
}

ImageInserter('https://picsum.photos/536/354', document.querySelector('body'));




