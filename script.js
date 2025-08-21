

function myFun()
{
    let name = document.getElementById("name").value;
    let height = +document.getElementById("height").value;
    let weight = +document.getElementById("weight").value;
    console.log(typeof name);
    console.log(typeof height);
    console.log(typeof height);
    console.log(height);
    console.log(weight);
    let out="";
    height = height / 100;
    let bmi = +(weight / (height ** 2)).toFixed(2);
    if(bmi < 18.5)
    {
        out+="Thin";

    }
    else if ( bmi > 25 )
    {
        out += "Fat";
    }
    else
    {
        out += "Normal";
    }

    document.getElementById("output").innerHTML=`${name} you are ${out}`;
}

function myFun1()
{
    document.getElementById("name").value="";
    document.getElementById("height").value="";
    document.getElementById("weight").value="";

}
console.log("Expresss");
console.log(4+7);
console.log("My First Program");
