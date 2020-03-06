import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit, OnDestroy, OnChanges {
  @Input() name: string;

  constructor() {
    console.log(this.name)
   }

  ngOnChanges(changes){
    console.log("inside OnChanges" , changes)
  }

  ngOnInit() {
    console.log("inside ngOnInit")
  }

  ngOnDestroy(){
    console.log("inside ngOnDestroy")
  }

}
