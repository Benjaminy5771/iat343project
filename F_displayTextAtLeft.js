function displayTextAtLeft(text) {
    // Create a new div to hold the text
    const textDiv = document.createElement('div');
    // Set the content, styles, and attributes for the new div
    textDiv.innerText = text;
    textDiv.style.position = 'absolute';
    textDiv.style.left = '50px';
    textDiv.style.top = '50px';
    textDiv.style.fontSize = '80px';
    textDiv.style.paddingLeft = '10px';
    textDiv.style.paddingRight = '10px';
    textDiv.style.backgroundColor = 'black';
    textDiv.style.color = 'white';
    textDiv.style.transform = 'rotate(90deg)';
    textDiv.style.transformOrigin = 'left';

    // Append the new div to the body of the document
    document.body.appendChild(textDiv);
}