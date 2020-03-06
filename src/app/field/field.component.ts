import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked {
  name="Angular";

  constructor() { }

  ngOnChanges(changes){
    console.log("child OnChanges" , changes)
  }

  ngOnInit() {
    console.log("child ngOnInit")
  }

  ngOnDestroy(){
    console.log("child ngOnDestroy")
  }

  ngDoCheck(){
    console.log("child DoCheck")
  }

  ngAfterViewInit(){
    console.log("child ngAfterViewInit")
  }

  ngAfterViewChecked(){
    console.log("child ngAfterViewChecked")
  }

}
