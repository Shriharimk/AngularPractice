import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() selection = new EventEmitter<String>();
  collapsed=true;

  onSelect(selection:string){
    this.selection.emit(selection)
  }
}

