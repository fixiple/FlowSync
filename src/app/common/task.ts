/* class definition of Task */
export default class Task{
    private _id: string;
    private _label: string;
    

    private create_UUID(){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    public get id(): string {
        return this._id;
    }

    public get label():string {
        return this._label;
    }

    public set label(val: string) {
        this._label = val;
    
    }

    constructor ( label: string) {
    // notice that I am using myProp and not _myProp
        this._id = this.create_UUID();
        this._label = label;
    }
}
