function emailValidation(form){
    if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(form.email.value)){
        return(true);
    }
    alert("Invalid e-mail address!!");
    return(false);
}

var height = 66; 
function textAreaHeightAdjust(textArea) {
    if(Number(textArea.scrollHeight)>height && Number(textArea.scrollHeight)<(0.8*Number(document.documentElement.clientHeight))){
        textArea.style.height = (textArea.scrollHeight)+"px";
        height+=6;
    }
}