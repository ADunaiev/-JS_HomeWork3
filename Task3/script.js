document.addEventListener('DOMContentLoaded', () => {
    const showTextBtn = document.getElementById('show-text-btn');
    if(!showTextBtn) throw "Could not find 'show-text-btn'"
    
    showTextBtn.onclick = showTextBtnClicked;
});

function showTextBtnClicked(e) {

    e.preventDefault();


    const myResult = document.getElementById('my-result');
    if (!myResult) throw "Can't find 'my-result'";

    var textHTML = "";
    textHTML += "<div class='col s12'><div class='card grey lighten-5'><div class='card-content'>";
    textHTML += "<span class='card-title'>Result:</span><p id='my-text'></p></div></div></div>";

    myResult.innerHTML = textHTML;

    const myText = document.getElementById('my-text');
    if (!myText) throw "Can't find 'my-text'";

    const myTextarea = document.getElementById('my-textarea');
    if (!myTextarea) throw "Can't find id 'my-textarea'";

    myText.innerHTML = myTextarea.value;

    // bold
    const boldText = document.getElementById('bold-text');
    if (!boldText) throw "Can't find 'bold-text'";

    if(boldText.checked) {
        myText.style.fontWeight = "bold";
    } else {
        myText.style.fontWeight = "normal";
    }

    //underline
    const underlineText = document.getElementById('underline-text');
    if (!underlineText) throw "Can't find 'underline-text'";
   
    if(underlineText.checked) {
        myText.style.textDecoration = "underline";
    } else {
        myText.style.textDecoration = "none";
    }

    // italic
    const italicText = document.getElementById('italic-text');
    if (!italicText) throw "Can't find 'italic-text'";

    if(italicText.checked) {
        myText.style.fontStyle = "italic";
    } else {
        myText.style.fontStyle = "initial";
    }
    
    // alignment
    const myTextAlignRadioButtons = document.querySelectorAll('input[name="my-text-align"]');
    if (!myTextAlignRadioButtons) throw "Can't find 'my-text-align'";

    for(let radioButton of myTextAlignRadioButtons) {
        if (radioButton.checked) {
            myText.style.textAlign = radioButton.nextSibling.nextElementSibling.outerText;
            break;
        }
    }
    

}

