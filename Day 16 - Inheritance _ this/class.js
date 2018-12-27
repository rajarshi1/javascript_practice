class User {
    constructor(name,score){
        this.getName = name,
        this.getScore = score
    }
    increaseScore(){
    return ++this.getScore;
}
}

class Moderator extends User{
    constructor(name,score){
    super(name,score)    
    }
    sharePublicMessage(){}
}


class PaidUser extends User{
    constructor(name,score,ab){
    super(name,score,ab)
    this.ab = ab
    }
    increaseBalance() {
        return ++this.ab;
    }
}