var the_register = [];
function submit(){
    var name1 = document.getElementById("input_1").value;
    var name2 = document.getElementById("input_2").value;
    var name3 = document.getElementById("input_3").value;
    var name4 = document.getElementById("input_4").value;
    var name5 = document.getElementById("input_5").value;
      
    the_register.push(name1);
    the_register.push(name2);
    the_register.push(name3);
    the_register.push(name4);
    the_register.push(name5);

    console.log(the_register);
    document.getElementById("display").innerHTML=the_register;
    document.getElementById("buttonsubmit").style.display="none";
    document.getElementById("buttonsort").style.display="inline-block";
}
function sort(){
    the_register.sort();
    console.log(the_register);
    document.getElementById("display").innerHTML=the_register;
}