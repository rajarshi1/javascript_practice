function userCreator(name, score){
    var obj = Object.create(userFunctions);
    obj.getName = name,
    obj.score = score
    return obj;
}

var userFunctions = {
    increaseScore : function (){
        return ++this.score;
    }
}

function moderatorCreator(name,score){
    var obj = userCreator(name,score);
    Object.setPrototypeOf(obj,moderatorFunctions);
    Object.setPrototypeOf(moderatorFunctions,userFunctions);
    return obj;
}

var moderatorFunctions = {
    sharePublicMessage : function (){}
}

function paidUserCreator(name, score, ab){
    var obj = userCreator(name,score);
    obj.ab = ab;
    Object.setPrototypeOf(obj,paidUserFunctions);
    Object.setPrototypeOf(paidUserFunctions,userFunctions);
    return obj;
}

var paidUserFunctions = {
    increaseBalance : function (){
        return ++this.ab;
    }
}