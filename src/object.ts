//Object
type Obj={
    height: number;
    weight: number;
    gender?:boolean; //optional property
};

const obj: Obj ={
    gender:true,
    height: 53,
    weight: 55,
};

const obj2: Obj={
    height:89,
    weight:94,
};

//Interface
interface Obj2{
    height:number;
    weight:number;
}

interface NewObj extends Obj2{
    scolar:boolean;
}

const gigi:NewObj = {
    height: 3436,
    weight: 3434,
    scolar:true,
}

///function in interface
interface NewObj2 extends Obj2{
    scolar:boolean,
    func:(n: number, m:number)=>void;
}

const kendal :NewObj2 ={
    height:34,
    weight:78,
    scolar:true,
    func:(n,m)=>{
        console.log(n*m);
    },
};

kendal.func(20,10);
