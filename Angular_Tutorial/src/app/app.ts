import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  imports: [RouterOutlet , Profile],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Angular_Tutorial');
  age = 23;
  countNow =0;
  data : string = "Hello World";
  multipleData : number | string|boolean = 56;
  multipleData2 : any = "Hello";

  btnDisable = false;
    updateName(){
    this.age=16
  }

  callMe(){
    alert("Hello");
  }
  counter(sign:string){
    if(sign === 'minus' && this.countNow > 0){
      this.countNow--;
    } else {
      this.countNow++;
    }
  }
  handleEvent(event: any){
    console.log(event.target.value);
  }
  updateData(value: string){
    this.data = value;//correct
    this.sum(5, 6);
    // this.data = 56 //error
  }
  sum (num1: number, num2: number): number{
    return num1 + num2;
  }
  toggleBtn(){
    this.btnDisable = !this.btnDisable;
  }
  isReadOnly = false;
  imgUrl = "path/to/image.jpg";

  datas=10;
  count = signal(100);
  updateDatas(){
    this.count.set(this.count()+1);
  
  }
  // constructor(){
  //   effect(()=>{
  //     console.log("Count value is : ", this.count());
  //     if(this.count() > 105){
  //       this.count.set(100);
  //     }
  //   });

  // }
  height = 200;
  width = 300;
  area = this.height * this.width;
  color = "red";


  handleHeight() {
    this.height += 10;
    // this.area = this.height * this.width;
  }
  computedHeight = signal(100);
  computedWidth = signal(200);
  computedArea = computed(() => this.computedHeight() * this.computedWidth());
  // this.computedArea.set(this.computedHeight() * this.computedWidth());->wrong
  handleComputedHeight() {
    this.computedHeight.set(this.computedHeight() + 10);
   
  }

  speed = signal(0);
  dataType = signal<string | number | boolean>("Hello");// it can be string or number or boolean
  
  constructor() {
    effect(() => {
      if(this.speed()> 0 && this.speed()<80){
        this.color = "green";
      } else {
        this.color = "red";
      }
      console.log("Speed value is : ", this.speed());
    });

    effect(() => {
      console.log("color value is : ", this.color);
    });
  }
  updateSpeed(){
    this.speed.set(this.speed()+10);
  }


}
