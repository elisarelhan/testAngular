import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
form=new FormGroup({
  name:new FormControl('')
});
id:any
@Input() public data:any
@Input() public isActive!:boolean
  constructor() { }
  ngOnInit(){
    this.id=this.data.id
  }
 

  ngOnChanges(): void {
    console.log(this.isActive)
   
    this.method()
    
  }
  method(){
    if(this.isActive)
    this.form.patchValue(this.data)
  }
  hitinit(){
    this.data={id:"1",name:"sample1"}
    this.method()
  }
}
