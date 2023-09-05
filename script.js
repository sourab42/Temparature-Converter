const calculateTemp= ()=>{
    const numberTemp=document.getElementById('temp').value
    const tempSelected=document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value

    const celToFah=(cel)=>{
        let fahrenheit=(cel*9/5) + 32
        return fahrenheit
    }
    const FahToCel=(fah)=>{
        let celcious=(fah-32)*5/9
        return celcious
    }
    let result
    if(valueTemp=='cel'){
        result=celToFah(numberTemp)
        document.getElementById('resultContainer').innerHTML= `= ${result.toFixed(2)}°Fahrenheit`;
    }
    else{
        result=FahToCel(numberTemp)
        document.getElementById('resultContainer').innerHTML= `= ${result.toFixed(2)}°Celcious`;
    }
}
