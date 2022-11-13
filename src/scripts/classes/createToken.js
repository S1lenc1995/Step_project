export class UserToken{
    constructor(token){
        this.token=token
    }
    setToken(value){
        this.token = value
    }
    getToken(){
        return this.token 
    }
}