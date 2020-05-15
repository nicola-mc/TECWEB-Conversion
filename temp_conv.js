function converitoreTemp(obj)
{
    if (obj.id === "celsius")
    {
        let val = parseFloat(obj.value);
        document.getElementById("fahrenheit").value = (val * (9 / 5)) + 32;
    }
    else
    {
        let val = parseFloat(obj.value);
        document.getElementById("celsius").value = (val - 32) * 5 / 9;
    }
}
