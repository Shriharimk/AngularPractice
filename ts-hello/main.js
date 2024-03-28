function display(item) {
    console.log(item);
}
//var and let demo
function vardemo() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //console.log("final value of i "+i);
}
//vardemo();
//Datatype demo
function dtdemo() {
    var num = 5; //when u hover over the vairable u can see the type of the vairable 
    //num='abc';//error coz it wont be typecasted on the fly
    console.log(num);
    //we can decalre a variable without any variable
    var a; //of any datatpe
    a = 2;
    a = "huh";
    a = true;
    display(a);
    //let arr1: any[] = [1, 2, 's', 'SHrihari', true];
    //display(arr1);
}
dtdemo();
function enumdemo() {
    var colors;
    (function (colors) {
        colors[colors["red"] = 1] = "red";
        colors[colors["blue"] = 2] = "blue";
        colors[colors["green"] = 3] = "green";
    })(colors || (colors = {}));
    display(colors.blue);
    display(colors.red);
    display(colors.green);
}
enumdemo();
//type assertions
var msg = 'abc';
var endsWithg = msg.endsWith('g');
display(endsWithg);
var msg2;
var msg3;
display(typeof msg2);
display(typeof msg2);
display(typeof msg2);

let val=(message) =>{

}
let dis=(message)=>{
    console.log(message);
}
dis("huh");

