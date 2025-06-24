import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  profileForm!: FormGroup;
  formSubmitted = false;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {}
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      department: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.employeeService.createProfile(this.profileForm.value).subscribe({
        next: () => {
          alert('Profile Created Successfully');
          this.formSubmitted = true;
        },
        error: (err) => {
          console.error('Error:', err);
        },
      });
    }
  }
}
