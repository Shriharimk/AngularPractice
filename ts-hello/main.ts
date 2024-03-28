function display(item){
  console.log(item);
}

/*//var and let demo
function vardemo(){
  for(let i=0;i<5;i++){
    console.log(i);
  }

//console.log("final value of i "+i);
}
//vardemo();

//Datatype demo
function dtdemo(){
  var num=5;//when u hover over the vairable u can see the type of the vairable 
  //num='abc';//error coz it wont be typecasted on the fly
  console.log(num);
  //we can decalre a variable without any variable
let a;//of any datatpe
a=2;
a="huh";
a=true;
display(a);

//let arr1: any[] = [1, 2, 's', 'SHrihari', true];
//display(arr1);
}
dtdemo(); 

function enumdemo(){
  enum colors{
    red=1,
    blue=2,
    green=3
  }
  display(colors.blue);
  display(colors.red);
  display(colors.green);
}
enumdemo();

//type assertions
let msg='abc';
//let endsWithg=msg.endsWith('g');
//display(endsWithg);
let msg2;
let msg3 
display(typeof msg2);
display(typeof (<string>msg2))
display(typeof (msg2 as string))
*/

//Arrow funciton demo
class classdemo{
  x:number;
  y:number;
  constructor(x?:number=1, y?:number=2){
      this.x=x;
      this.y=y;
  }
  func1= ()=>{
      console.log('X = '+this.x+' Y = '+this.y);
  }
}
let obj=new classdemo();

obj.func1();
