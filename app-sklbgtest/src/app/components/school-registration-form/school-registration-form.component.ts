import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchoolService } from 'src/app/services/school/school.service';

enum FormStatus {
  Processing,
  Succeed,
  Failed
}

@Component({
  selector: 'school-registration-form',
  templateUrl: './school-registration-form.component.html',
  styleUrls: ['./school-registration-form.component.css']
})
export class SchoolRegistrationFormComponent implements OnInit {

  schoolRegistrationForm: FormGroup;
  status: FormStatus;
  formSubmitAttempt: boolean = false;

  constructor(private fb: FormBuilder, private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.schoolRegistrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      operatedBy: ['', Validators.required],
      studentCount: [null, [Validators.required, Validators.max(30000)]],
      address: this.fb.group({
        street: ['', Validators.required],
        suburb: ['', Validators.required],
        postcode: ['', Validators.required],
        state: ['', Validators.required]
      }),
    });
  }

  // easy access to form fields
  get srForm() { return this.schoolRegistrationForm.controls; }

  get formStatus() { return FormStatus[this.status]; }

  onSubmit() {
    this.formSubmitAttempt = true;

    if (this.schoolRegistrationForm.invalid) {
      return;
    }

    this.status = FormStatus.Processing;

    this.schoolService.createSchool(this.schoolRegistrationForm.value)
      .subscribe(
        (response: any) => {
          this.schoolRegistrationForm.reset();
          this.formSubmitAttempt = false;
          this.status = FormStatus.Succeed;
      }, (err) => {
        this.formSubmitAttempt = false;
      });
    
  }
  
}
