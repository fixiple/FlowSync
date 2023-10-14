import Task from "./task";
export default class TaskList {
    private _myList: Array<Task>;

    public get myList(): Array<Task> {
        return this._myList;
    }

    public set myList(val: Array<Task>) {
        this._myList = val;

    }

    constructor (myList: Array<Task>) {
    // notice that I am using myProp and not _myProp
        this._myList = myList;
    }
}