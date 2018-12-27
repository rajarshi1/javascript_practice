function UserCreator(name, score){
    this.getName = name,
    this.getScore = score
}

UserCreator.prototype.increaseScore = function(){
    return ++this.getScore;
}


function ModeratorCreator(name, score){
    UserCreator.call(this,name,score);
}

ModeratorCreator.prototype.sharePublicMessage = function(){
    alert('message');
}

Object.setPrototypeOf(ModeratorCreator.prototype, UserCreator.prototype);


function PaidUserCreator(name, score, ab){
    UserCreator.call(this,name,score);
    this.getAb = ab
}

PaidUserCreator.prototype.increaseBalance = function(){
    return ++this.getAb;
}
Object.setPrototypeOf(PaidUserCreator.prototype, UserCreator.prototype);

var vishwa = new UserCreator('vishwa', 50);
var ravi = new PaidUserCreator('ravi', 38, 390);