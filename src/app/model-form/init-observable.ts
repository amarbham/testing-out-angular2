import { Observable } from 'rxjs/Rx';

export function initObservable(){
    var keys$ = Observable.fromEvent(document, 'keyUp')
            .do((keyUp: KeyboardEvent) => console.log(keyUp.key))
            .subscribe()
}