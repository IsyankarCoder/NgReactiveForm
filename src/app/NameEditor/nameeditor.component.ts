import { Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
selector:'app-name-editor',
  templateUrl:'../NameEditor/nameeditor.component.html',
  styleUrls:['../NameEditor/nameeditor.component.css']
})
export class NameEditorComponent 
{
     name = new FormControl('VolkanTolkan');
     constructor(){

     }

     updateName():void{
         this.name.setValue("honki ponki");
     }
}