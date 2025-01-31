function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Q-fb-i3wS/model.json')
}

function modelLoaded()
{
console.log('modelo cargado');
}

function draw()
{
image(video, 0, 0, 300, 300);
classifier.classify(video, gotResult);
}

function gotResult(error, results)
{
if(error)
{
console.error(error);
}else{
console.log(results);
document.getElementById("results_objet_name").innerHTML = results[0].label;
document.getElementById("results_objet_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}