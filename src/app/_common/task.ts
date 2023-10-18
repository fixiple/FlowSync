/* class definition of Task */
export default class Task{
    private _id: number;
    private _label: string;
    

    //better use-case for something else...
    private create_UUID(){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    public get id(): number {
        return this._id;
    }

    public get label():string {
        return this._label;
    }

    public set label(val: string) {
        this._label = val;
    
    }

    constructor ( id: number, label: string) {
        this._id = id;
        this._label = label;
    }
}
