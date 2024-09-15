function getWeather(){
    return new Promise(function(resolve, reject){
       setTimeout(() => {
        resolve("Rainy");
       },100)
    })
}  

function getIcon(weather){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            switch(weather){
                case  'Sunny':
                    resolve('☀️');
                    break;
                case 'Rainy':
                    resolve('⛅');
                    break;
                default : 
                reject('NO ICON FOUND');
            }
        },100)
    })

}


getWeather()
.then(getIcon)
.then((data)=>{
    console.log(data);
},(error)=>{
    console.log(`Error is ${error}`);
})



function fun1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            reject('404');
        }, 100);
    })
}

console.log(fun1());


//real-world example
function fetchData() {
    return new Promise((resolve,reject)=>{
        fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
        .then(response => response.json())
        .then(data => resolve(data.properties.periods[1].shortForecast));
    })
}

function displayData(weather){
    console.log(weather);
}

function onError(err){
    console.log(`Error is ${err}`);
}

fetchData()
.then(displayData)
.catch(onError);    