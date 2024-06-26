import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  tabs=['tab1','tab2']
  data: any=[{}, {}];
  index=  0;
  constructor() { }

  ngOnInit(): void {
    this.data[0] = {id:"tab1"};
  }
  tabChange(event:any){
    console.log(event)
    this.index=event.index
    this.data={}
    if (this.tabs[this.index]==="tab1"){
     this. data[0]={id:"tab1",name:this.index}
    }
    else if(this.tabs[this.index]==="tab2"){
      this. data[1]={id:"tab2",name:this.index+'a'}
    }
  }
  hitinit(){
    this.data[this.index] = {id:"1",name:"sample"}
  }

}
