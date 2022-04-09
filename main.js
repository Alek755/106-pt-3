function Test__Sound() {
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
    
}

function gotResults(error, results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);

        document.getElementById("Audio__Type").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("Audio__Detection").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";

        if(results[0].label == "Barking") {
            document.getElementById("animal__Images").src = "dog.gif";
        } 

        else if(results[0].label == "Meowing") {
            document.getElementById("animal__Images").src = "cat.gif";
        }

        else {
        document.getElementById("animal__Images").src = "ear.png";
        }


    }

}