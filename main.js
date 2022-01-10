function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-V0K_wPir/model.json', modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
} 

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        Image1 = document.getElementById("doggy");
        Image2 = document.getElementById("kitty");
        Image3 = document.getElementById("owl");
        Image4 = document.getElementById("lion");
        document.getElementById("result_label").innerHTML = "I can hear - " +results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " +(results[0].confidence*100).toFixed(2)+" %";
        if(results[0].label == "Barking"){
            Image.src = "doggy.jpeg";
            document.getElementById("doggy.jpeg").width = "300";
            document.getElementById("doggy.jpeg").height = "300";
            
            document.getElementById("kitty.jpeg").width = "200";
            document.getElementById("kitty.jpeg").height = "220";
            document.getElementById("owl.png").width = "200";
            document.getElementById("owl.png").height = "220";
            document.getElementById("lion.png").width = "200";
            document.getElementById("lion.png").height = "220";
        }
        else if(results[0].label == "Meowing"){
            Image.src = "kitty.jpeg";
            document.getElementById("kitty.jpeg").width = "300";
            document.getElementById("kitty.jpeg").height = "300";
            
            document.getElementById("doggy.jpeg").width = "200";
            document.getElementById("doggy.jpeg").height = "220";
            document.getElementById("owl.png").width = "200";
            document.getElementById("owl.png").height = "220";
            document.getElementById("lion.png").width = "200";
            document.getElementById("lion.png").height = "220";
        }
        else if(results[0].label == "Background Noise"){
            Image.src = "bg_noise.jpeg";
            document.getElementById("bg_noise.jpeg").width = "300";
            document.getElementById("bg_noise.jpeg").height = "300";

            document.getElementById("doggy.jpeg").width = "200";
            document.getElementById("doggy.jpeg").height = "220";
            document.getElementById("owl.png").width = "200";
            document.getElementById("owl.png").height = "220";
            document.getElementById("lion.png").width = "200";
            document.getElementById("lion.png").height = "220";
            document.getElementById("kitty.jpeg").width = "200";
            document.getElementById("kitty.jpeg").height = "220";
        }
        else if(results[0].label == "Hooting"){
            Image.src = "owl.jpeg";
            document.getElementById("owl.jpeg").width = "300";
            document.getElementById("owl.jpeg").height = "300";
            
            document.getElementById("doggy.jpeg").width = "200";
            document.getElementById("doggy.jpeg").height = "220";
            document.getElementById("kitty.jpeg").width = "200";
            document.getElementById("kitty.jpeg").height = "220";
            document.getElementById("lion.png").width = "200";
            document.getElementById("lion.png").height = "220";
        }
        else if(results[0].label == "Roaring"){
            Image.src = "lion.png";
            document.getElementById("lion.png").width = "300";
            document.getElementById("lion.png").height = "300";

            document.getElementById("doggy.jpeg").width = "200";
            document.getElementById("doggy.jpeg").height = "220";
            document.getElementById("owl.png").width = "200";
            document.getElementById("owl.png").height = "220";
            document.getElementById("kitty.jpeg").width = "200";
            document.getElementById("kitty.jpeg").height = "220";
        }
    }
}