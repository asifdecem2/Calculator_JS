function clearText()
    {
        var result=document.getElementById('result');
        result.value='';
    }
function cE()
{
    var text1 = document.getElementById("result").value;
    var result = text1.split("").join("");
    document.getElementById("result").value = result.slice(0,-1);
    
}

function getNumber(num)
{
    var txt=document.getElementById('result');
    txt.value+=num;
}
function getNumber(num)
{
    var txt=document.getElementById('result');
    txt.value+=num;
}
function getResult()
{
    var result=document.getElementById('result');
    result.value=eval(result.value);
}