const fragment = document.createDocumentFragment();

const createSection = (message) => {
    let sec = document.createElement("section");
    sec.className = "message";
    sec.textContent = `${message}`
    fragment.appendChild(sec)

}
createSection("this is the first message");
createSection("this is the second message");
createSection("this is the third message, it's getting kinda repetitive");
createSection("this is the fourth message, only one more");
createSection("made it to number 5");

document.querySelector("#messages").appendChild(fragment)