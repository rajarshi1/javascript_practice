function getResult(phy,chem,math) {
    this.phyMarks = phy;
    this.chemMarks = chem;
    this.mathMarks = math
}


getResult.prototype.percentage = function getPercent(){
    return (this.phy+ this.chem+ this.math/300);
  }

getResult.prototype.passOrFail = function getFate(){
    if (getResult.percentage()>30){
        console.log('Pass');
    }
    else{
        console.log('Fail')
    }
}

getResult.prototype.total = function getTotal(){
    return phy+chem+math
}

var ravi = new getResult(20,30,37);
var vishwa = new getResult(50,30,40);
var abid = new getResult(68,70,91);
