import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SignalService {
    private _counter = new BehaviorSubject<number>(0);
    counter$ = this._counter.asObservable();

    get counter():number {
        return this._counter.getValue();

    }

    increment() {
        this._counter.next(this.counter + 1);
    }

    decrement() {
        this._counter.next(this.counter - 1);
        
    }

}



