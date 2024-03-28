import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipebook';
  defaultSelection: String='recipe';
  onNavigate(selection: String){
    this.defaultSelection=selection;
  }
}
