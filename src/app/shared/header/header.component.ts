import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 isOpen:boolean=true
@Output() isToggle = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
this.isOpen=!this.isOpen
this.isToggle.emit(this.isOpen)

  }

}
