import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ICar} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {
  storage = new BehaviorSubject<ICar>({id: 0, model: '', year: 0, price: 0});

  constructor() {
  }
}
