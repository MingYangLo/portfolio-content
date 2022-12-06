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


var i = 0;
function textAreaCollapse(){
    var formSpan = document.getElementById("gallery_form").getElementsByTagName("span")[0];
    var fontSize = window.getComputedStyle(formSpan).fontSize.split('p')[0];
    if(Number(fontSize)==18){
        var textArea = document.getElementById("gallery_form").getElementsByTagName("textarea")[0];
        var button = document.getElementById("gallery_form").getElementsByTagName("button")[0];
        i+=1;
        if((i%2)==1){
            textArea.style.display = "none";
            button.style.display = "none";
            document.getElementById("up").style.display="initial";
            document.getElementById("up_two").style.display="initial";
            document.getElementById("down").style.display="none";
            document.getElementById("down_two").style.display="none";
        }
        else{
            textArea.style.display = "initial";
            button.style.display = "initial";
            document.getElementById("up").style.display="none";
            document.getElementById("up_two").style.display="none";
            document.getElementById("down").style.display="initial";
            document.getElementById("down_two").style.display="initial";
        }
    }
}
document.getElementById("clickable").addEventListener("click", textAreaCollapse);
