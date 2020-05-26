import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
    selector: 'app-profile-editor',
    templateUrl: 'profile-editor.component.html',
    styleUrls: ['profile-editor.component.css']
})

export class ProfileEditorComponent implements OnInit {
    profileForm = new FormGroup({
        firstName2: new FormControl('',Validators.required),
        lastName2: new FormControl(''),
        address: new FormGroup({
            street: new FormControl(''),
            city: new FormControl(''),
            state: new FormControl(''),
            zip: new FormControl('')
        })
    });

    constructor() { }

    ngOnInit() { }
    onSubmit() {

        console.log(this.profileForm.value);
    }

    updatePatchForm(){
        this.profileForm.patchValue({
            firstName2:'Volkan',
            address:{
                street:'SAmsin Pafra'
            }
        });
    }
}
