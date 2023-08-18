interface Observer<T>{
    next (value: T): void;
    error(value: any) : void;
    complete():void;
}

function myObservable <T>(observer : Observer<T>)  {

}