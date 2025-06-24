import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  postForm!: FormGroup;
  formSubmitted = false;
  departments = ['HR', 'Finance', 'Engineering', 'Marketing'];
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      department: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.employeeService.createPost(this.postForm.value).subscribe({
        next: () => {
          alert('Post Created Successfully');
         this.formSubmitted = true;
        },
        error: (err) => {
          console.error('Error:', err);
        },
      });
    }
  }
}
