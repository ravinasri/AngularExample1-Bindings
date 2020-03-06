import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Interpolation
  public name = "testuser";
  public currentURL = window.location.href; 
  welcomeUser(){
    return "Hello " + this.name;
  }

  //Property Binding
  public myID = "testId";
  public isDisabled = true;

  //Class Binding
  public successClass = "text-success"
  public hasError = false;
  public isSpecial = true;
  public message = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  //Style Binding
  public highlightColor="orange";
  public titleStyle={
    color: "blue",
    fontStyle: "italic"
  }

  //Event Binding
  public submitMessage: string = "";
  /* submit(){
    console.log("Submitted Successfully");
    this.submitMessage = "Submitted Successfully"
  } */

  submit(event){
    console.log(event);
    this.submitMessage = event.type;
  }

  //Two Way Binding
  //public name="";

  //pipes
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  public date = new Date();


  //ngOnInit()
  show = false;

  toggle(){
    this.show = !this.show;
  }


  
}
