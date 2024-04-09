function reduce(){
    var amount1,amount2;
    var co1,co2,co3;
    if(document.getElementById("fuel").value!=""){
        amount1=document.getElementById("fuel").value;
        amount2=document.getElementById("dist").value;
        co1=(amount2*12.31);
        console.log(co3);
        co1=co1/amount1;
        document.getElementById("result1").innerHTML="Vehicle:    "+Math.round(co1)+" Kg CO2"; 
    }
    if(amount2=document.getElementById("fuelConsumption").value!=""){
        amount1=document.getElementById("fuelConsumption").value;
        amount2=document.getElementById("distance").value;
        co3=(amount2*12.31);
        console.log(co3);
        co3=co3/amount1;
        document.getElementById("result3").innerHTML="Vehicle:    "+Math.round(co3)+" Kg CO2"; 
    }
    
}