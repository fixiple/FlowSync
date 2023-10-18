/* class definition of Task */
export default class Task{
    private _id: number;
    private _label: string;
    private _done: boolean;
    

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

    public get done():boolean {
        return this._done;
    }

    public set done(val: boolean) {
        this._done = val;
    
    }

    constructor ( id: number, label: string, done: boolean = false) {
        this._id = id;
        this._label = label;
        this._done = done;
    }
}
