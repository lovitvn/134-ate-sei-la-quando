Img = "";
objects = [];
modelStatus = "";

function preload(){
    img = loadImage("dog_cat.jpg")
}

function setup(){
    canvas = createCanvas(650, 430);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(650, 430);
    video.hide();
}

    function start() {
        objectDetector = ml5.objectDetector("cocossd", modelloaded)
    document.getElementById("status").innerHTML = "Status: Detectando Objetos";
    }

function modelloaded(){
    console.log("A coisa que te pertence que voce usara como base ja terminou de ser implementada na sua guia de seu navegador")
    modelstatus = true;
    
}
function gotResult(error, results){
    if(error){
        console.log("algo nao foi bem sucedido no carregamento de seu modelo")
    }
    console.log("coisa ou acontecimento que aconteceu ou apareceu depois de voce com sucesso carregou seu modelo")
    objects = results;
}

function draw(){
    image(video, 0, 0, 640, 420);
    if (modelStatus != "") {
        objectDetector.detect(video, gotResult);
        for (var i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: O objelto foi deltectado"
            document.getElementById("noo").innerHTML = "numero de coisas que formao uma outra coisa que chamamos de objetos que foram terminados de serem vistos pelo seu computador: "+ objects.length
         fill ("#8A9A5B")
         percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            nofill()
            stroke("#8A9A5B")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
    }
}