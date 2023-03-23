var translatorUrl="https://api.funtranslations.com/translate/minion.json";
var input=document.querySelector(".inputArea");
var output=document.querySelector(".outputArea");
var translator=document.querySelector(".button");
function gettranslatorUrl(input)
{
    return translatorUrl+"?"+"text="+input;
}
function buttonclick()
{
    var textInput=input.value;
    fetch(gettranslatorUrl(textInput))
    .then(response=>response.json())
    .then(json=>
        {
        var translatedText=json.contents.translated;
        output.innerText=translatedText;
        })
}
translator.addEventListener("click",buttonclick);