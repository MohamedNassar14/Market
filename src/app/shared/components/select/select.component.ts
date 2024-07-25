import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor() {}

  @Input() title:string = '';
  @Input() data:string[] = [];
  @Output() selectedValue = new EventEmitter();

  ngOnInit(): void {  
  }

  detectChanges(event:any)
  {
     this.selectedValue.emit(event);
  }

}
