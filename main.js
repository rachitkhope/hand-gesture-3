Webcam.set({
    width:350,
    height:300,
    Image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML ='<img id="captured_image" src="'+data_uri+'"/>';    
    });
}

console.log('ml5version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uQWNot2bD/model.json',modelLoaded);


function modelLoaded() {
    console.log('model Loaded!');
}

function  check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotresult(error, results){
    if (error) {
        console.error(error);
    } else{ 
        console.log(results);

        document.getElementById("result_object_name").innerHTML = results[0].label;

        gesture = results[0].label;

        tospeak = "";

        if(gesture =="beutiful")
        {
            tospeak = "this is looking amazing";
            document.getElementById("result_object_gersture_icon").innerHTML = "8#128076;";
        }
        else if(grsture =="thumbs up")
{        tospeak = "ALL THE BEST";
        document.getElementById("result_object_gersture_icon").innerHTML = "8#128077;";
    }   
 else if(gesture=="victory")
 {
    tospeak = "that was a marvelous victory"
    document.getElementById("result_object_gersture_icon").innerHTML = "&#9996;";   
 }
}
 speak()
 }
