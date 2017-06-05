import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {IState} from './state';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

const state: IState = {
  playList: undefined
};

export class Store {
  /*Because store usually has a default value, BehaviorSubject is suitable for that*/
  private subject = new BehaviorSubject<IState>(state);

  /*Create a observable store*/
  private store = this.subject
    .asObservable() // convert to an observable
    .distinctUntilChanged(); // performance improve

  /*Get value from subject*/
  get value() {
    return this.subject.value;
  }

  set(name: string, state: any) {
    const nextState = {
      ...this.value,
      [name]: state
    };
    this.subject.next(nextState);
  }

  select<T>(name: string): Observable<T> {
    // get prop value from observable
    return this.store.pluck(name);
  }

}
