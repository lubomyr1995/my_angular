import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICar} from "../../../../interfaces";
import {BehaviorService} from "../../../../services/behavior.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input()
  car: ICar;
  @Output()
  deleteEmitter = new EventEmitter<number>();
  @Output()
  updateEmitter = new EventEmitter<ICar>();

  constructor(private behaviorService: BehaviorService) {
  }

  ngOnInit(): void {
  }

  delete(): void {
    this.deleteEmitter.emit(this.car.id)
  }

  updateStorage() {
    this.updateEmitter.emit(this.car)
  }
}
