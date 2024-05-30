function bold() {
    let textarea = document.getElementById("textArea");
    textarea.style.fontWeight = textarea.style.fontWeight === "bold" ? "normal" : "bold";
    formatText();
}

function italic() {
    let textarea = document.getElementById("textArea");
    textarea.style.fontStyle = textarea.style.fontStyle === "italic" ? "normal" : "italic";
    formatText();
}

function underline() {
    let textarea = document.getElementById("textArea");
    textarea.style.textDecoration = textarea.style.textDecoration === "underline" ? "none" : "underline";
    formatText();
}

function changeCase() {
    let textarea = document.getElementById("textArea");
    let text = textarea.value;
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);
        if (char === char.toUpperCase()) {
            newText += char.toLowerCase();
        } else {
            newText += char.toUpperCase();
        }
    }
    textarea.value = newText;
    formatText();
}

function changeColor(event) {
    let textarea = document.getElementById("textArea");
    textarea.style.color = event.target.value;
    formatText();
}

function formatText() {
    let textarea = document.getElementById("textArea");
    let formattedText = document.getElementById("formattedText");
    formattedText.innerHTML = textarea.value;
    formattedText.style.fontWeight = textarea.style.fontWeight;
    formattedText.style.fontStyle = textarea.style.fontStyle;
    formattedText.style.textDecoration = textarea.style.textDecoration;
    formattedText.style.color = textarea.style.color;
}