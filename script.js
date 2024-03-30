function display(num)
{
    result.value+=num
}

function clearText()
{
    result.value=""
}

function evalNum()
{
    result.value=eval(result.value)
}

function removeText()
{
    result.value=result.value.slice(0,-1)
}