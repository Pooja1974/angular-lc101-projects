import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  takeOffEnabled: boolean = true;

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  handleTakeOff()
 {
  let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
  if (result) {
     this.color = 'blue';
     this.height = 10000;
     this.width = 0;
     this.message = 'Shuttle in flight.';
  }
}

   handleLanding(){
    let result = window.confirm('The shuttle is landing. Landing gear engaged.');
    if (result) {
       this.color = 'green';
       this.height = 0;
       this.width = 0;
       this.message = 'The shuttle has landed.';

   }
  }
   handleAbort(){

    let result= window.confirm('Are you sure to abort the shuttle?');
    if (result) {
       this.color = 'red';
       this.height = 0;
       this.width = 0;
       this.message = 'Mission aborted.';

   }
}


moveRocket(rocketImage, direction) {
  if (direction === 'right') {
     let movement = parseInt(rocketImage.style.left) + 10 + 'px';
     rocketImage.style.left = movement;
     this.width = this.width + 10000;
  }
  if (direction === 'left') {
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width - 10000;
 }
 if (direction === 'up') {
  let movement = parseInt(rocketImage.style.top) -10 + 'px';
  rocketImage.style.top = movement;
  this.height = this.height + 10000;
}
if (direction === 'down') {
  let movement = parseInt(rocketImage.style.top) + 10 + 'px';
  rocketImage.style.top= movement;
  this.height = this.height-10000;
}
}
}