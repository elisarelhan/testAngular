import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
tabs=['tab1','tab2']
data={}
  constructor() { }

  ngOnInit(): void {
    this.data={id:"tab1"}
  }
  tabChange(event:any){
    console.log(event)
    let index=event.index
    this.data={}
    // if (this.tabs[index]==="tab1"){
    //  this. data={id:"tab1",name:index}
    // }
    // else if(this.tabs[index]==="tab2"){
    //   this. data={id:"tab2",name:index+'a'}
    // }
  }
  hitinit(){
    this.data={id:"1",name:"sample"}
  }

}
