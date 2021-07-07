import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResourcesService } from 'src/app/services/resources.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characters: [] = [];
  charactersSub: any;

  registerForm!: FormGroup;
  submitted = false;


  constructor(private resources: ResourcesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.charactersSub = this.resources.getCharacters().subscribe((data) => { 
      console.log(data);
      this.characters = data;
    })

    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
  }

   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
  
  ngOnDestroy(): void {
    this.charactersSub.unsubscribe()
  }
}
