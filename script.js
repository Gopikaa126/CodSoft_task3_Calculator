function appendresult(value)
{
    document.getElementById('result').value+=value;
}
function clearresult()
{
    document.getElementById('result').value= '';
    document.getElementById('result2').value= '';

}
function calculateresult()
{
    var inputval=document.getElementById('result').value;
    var result;
    try
    {
        result=eval(inputval);
        document.getElementById('result2').value=inputval;
        document.getElementById('result').value=result;
    }
    catch(error)
    {
        document.getElementById('result').value='Error';        
    }
}
function deletelast()
{
    var result=document.getElementById('result').value;
    document.getElementById('result').value= result.slice(0,-1);
}
