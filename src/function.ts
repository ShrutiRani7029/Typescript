//Optional Parameter

type FuncType = (n:number, m:number, l?:number) =>number;

const func1:FuncType =(n,m,l)=>{
    if(typeof l ==="undefined")return n*m;
    return n*m*l;
};

console.log(func1(5,4));


//Default Parameter

type FuncType1 = (n:number, m:number, l?:number)=>number;
const func2: FuncType1=(n,m,l=20)=>{
    return n*m*l;
}

console.log(func2(5,2,10));



///Rest Operator
 type FuncType2 = (...m:number[])=>number[];

 const func3 : FuncType2=(...m)=>{
    return m;
 }

 console.log(func3(1,2,3, 7, 999090, 4690));


//Rest Operator