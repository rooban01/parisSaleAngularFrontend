export class User {

    public id: string;
    public userName: string;
    public userSurname: string;
    public password: string;
    public email: string;
    private _token: string;
    private _tokenExpirationDate: Date;

    get token(){
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return null;
        }
        return this._token;
    }
}
