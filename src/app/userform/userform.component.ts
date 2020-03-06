import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked {

  constructor() { }

  ngOnChanges(changes){
    console.log("parent OnChanges" , changes)
  }

  ngOnInit() {
    console.log("parent ngOnInit")
  }

  ngOnDestroy(){
    console.log("parent ngOnDestroy")
  }

  ngDoCheck(){
    console.log("parent DoCheck")
  }

  ngAfterViewInit(){
    console.log("parent ngAfterViewInit")
  }

  ngAfterViewChecked(){
    console.log("parent ngAfterViewChecked")
  }


}
