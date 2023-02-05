var input= document.querySelector("#text");
var btn=document.querySelector("#button");
var result=document.querySelector("#outputTxt");


btn.addEventListener("click",translate)

var url="https://api.funtranslations.com/translate/navi.json" 
function translate(){
    let inputValue=input.value;
    newUrl=`${url}?text=${inputValue}`
    fetch(newUrl).then((data)=>data.json()).then((data)=>
    {
        console.log(data);
        result.innerHTML=data.contents.translated;
    })

    }




// function getUrl(textFrurl){
//     return serverURL+"?"+"text=" +textFrurl;
// }

// function onClick(){
//     var inputData=input.value;

//     fetch(getUrl(inputData))
//     .then(response=>response.json())
//     .then(json=>{
//         var translatedData=json.contents.translated;
//         result.innerHTML=translatedData;
//     })
// }
