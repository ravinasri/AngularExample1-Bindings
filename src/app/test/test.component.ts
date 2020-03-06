import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public displayName = true;
  public color = "pink";
  //public colors = [{ id: 1, name: "red" }, { id: 2, name: "blue" }, { id: 3, name: "green" }, { id: 4, name: "yellow" }]
  public colors = ["red","blue","green","yellow"]
  constructor() { }

  ngOnInit() {
  }

}
