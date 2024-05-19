//Basic class working
class Player{
    height;
    weight;

    constructor(height:number, weight:number){
        this.height=height;
        this.weight=weight;
    }
}

const ab=new Player(10,20);
console.log(ab.height); //-->access
console.log(ab.weight);
//basic working done


//access specifier (private, public, protected)
class Player2{
    public readonly id:string;
    constructor(
        private height:number,
        public weight:number,
        protected power:number,
    )
    {
        this.id=String(Math.random()*100);
    }
    //FOR PRIVATE
    getMyHeight = () => this.height;
}

class Player3 extends Player2{
    special:boolean;
    constructor(height:number, weight:number, power:number, special:boolean)
    {
        super(height,weight,power);
        this.special=special;
    }

    //FOR PROTECTED
    getMyPower = () => this.power;
}

const abc=new Player3(100,134,24,true);
console.log(abc.weight);
console.log(abc.getMyHeight());
console.log(abc.getMyPower());
console.log(abc.id);
console.log(abc.special);


//getter and setter function
class Player4{
public readonly id:string
constructor(
    private height:number,
    public weight:number,
    protected power:number,)
{
    this.id = String(Math.random()*100);
}
///getter function
get getMyHeight() : number{
    return this.height;
}

///setter function
set changeHeight(val:number){
    this.height=val;
}
}


const abcd=new Player4(100, 345, 78);
console.log(abcd.getMyHeight);
abcd.changeHeight=456;
console.log(abcd.getMyHeight);

