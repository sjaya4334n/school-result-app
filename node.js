function add(){

 document.getElementById("invalid").innerHTML = "";   

let name = document.getElementById("name").value;

let namePattern = /^[a-zA-Z]+$/;

if (name === ""){
    document.getElementById("invalid").innerHTML = "Enter the name";
    invalid();
    return
}

if (!namePattern.test(name)){
   document.getElementById("invalid").innerHTML = "Enter the name";
   invalid();
   return; 
}

let tam =  Number (document.getElementById("tam").value);
let eng =  Number (document.getElementById("eng").value);
let mat =  Number (document.getElementById("mat").value);
let sci =  Number (document.getElementById("sci").value);
let soc =  Number (document.getElementById("soc").value);


    let total = tam + eng + mat + sci + soc;

    let avg = total / 5;

    let result; 

    if (avg >=90 && avg <=100){
    result = "A";
    }
    else if (avg >=75 && avg <=89){
    result = "B";
    }
    else if (avg >= 50 && avg <= 74){
     result = "C";
    }
    else if (avg< 50){
     result = "Fail";
    }
    else{
    document.getElementById("invalid").innerHTML = "Invalid input";
    invalid();
    return;
    }


let Table = document.getElementById("table");

Table.innerHTML +=`
<tr>
    <td>${name}</td>
    <td>${total}</td>
    <td>${avg}</td>
    <td>${result}</td>
    <td class="back"><button onclick="deleterow(this)" class="ton">❌</button></td>
</tr>`

totalno();


}

function invalid(){
    document.getElementById("name").value = "";
    document.getElementById("tam").value = "";
    document.getElementById("eng").value = "";
    document.getElementById("mat").value = "";
    document.getElementById("sci").value = "";
    document.getElementById("soc").value = "";

    document.getElementById("name").focus();
}

function mode(){

    let isDark = document.body.classList.toggle("dark");

    let img = document.getElementById("modeIcon");

    if(isDark){
        img.src = "image/sun.png";
    }else{
        img.src = "image/moon.png";
    }
}

function deleterow(btn){
    btn.parentElement.parentElement.remove();
    totalno();
}

function totalno(){
    let rows = document.querySelectorAll("#table tr");
    document.getElementById("count").innerHTML = rows.length;
   
let pass = 0;

    rows.forEach(function(row){
        let grade = row.children[3].innerText;
        
        if(grade !== "Fail"){
            pass++;
        }
    });

    document.getElementById("pass").innerHTML = pass;

     invalid();
}
