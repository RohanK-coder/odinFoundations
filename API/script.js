const but = document.getElementById('btn');

but.addEventListener("click",()=>{
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/guntur?unitGroup=metric&key=QUHDK9RQJQBGKG5WXGM6DKA6G&contentType=json")
    .then((response) => {
        return new Promise((resolve,reject) => {
            resolve(response.json());
        })
    })
    .then((resp) => {
        console.log(resp);
        console.log(resp.description);
    })

})