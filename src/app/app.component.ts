import { Component } from '@angular/core';
export type editorType = 'name' | 'profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editor: editorType = name;

  title = 'Angular-ReactiveForm';
  get showNameEditor() {
    return this.editor === 'name';
  }
  get showProfileEditor() {
    return this.editor === 'profile';
  }
  toggleEditor(type) {
    this.editor = type;
  }
}
