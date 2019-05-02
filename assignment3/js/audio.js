// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};


window.onload = function(){

var text = "";
var myAudio = document.querySelector("#d1");

    text += "<figure>" + "<audio ";
        if(audio.controls)
            text += "controls" + ">";
        else
            text += ">";

        for (var j = 0; j < audio.source.length; j++){
            text += "<source src= " + audio.source[j].src + " "; 
            text += "type=" + audio.source[j].type + " " + "/>";
        }
        text +="</audio>" + "</figure>"; 

    myAudio.innerHTML = text;

}