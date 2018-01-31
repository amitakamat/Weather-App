var baseURL = "http://ec2-18-144-71-173.us-west-1.compute.amazonaws.com:8000/weather/"

function handleSubmit(e){
    e.preventDefault();
    e.stopPropagation();
    var location = document.getElementById("location").value;
    var getUrl = baseURL + location;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", getUrl, true); 
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            respData = JSON.parse(this.responseText);
            console.log(data);
            if(respData.code == 200){ 
                /* Populate the details div if the city is found.*/         
                document.getElementById("headerLabel").innerHTML  = "Weather at " + respData.data.name + ", " + respData.data.sys.country;
                document.getElementById("tempLabel").innerHTML  = respData.data.main.temp + " F";
                document.getElementById("desc").innerHTML  = respData.data.weather[0].description;
                document.getElementById("humidity").innerHTML  = respData.data.main.humidity + " %";
                document.getElementById("wind").innerHTML  = respData.data.wind.speed + " mph";
                document.getElementById("pressure").innerHTML  = respData.data.main.pressure + " hPa";
                document.getElementById("weatherIcon").src = "http://openweathermap.org/img/w/" + respData.data.weather[0].icon + ".png";
                document.getElementById("weatherContent").style.display = "block";
                document.getElementById("errorContent").style.display = "none";
            }
            else{
                 /* Send the error message back if the city is not found.*/ 
                document.getElementById("weatherContent").style.display = "none";
                document.getElementById("errorContent").style.display = "block";
                document.getElementById("errorMessageLabel").innerHTML  = respData.data + ". Please verify the name and try again.";
            }
        }
    }
}