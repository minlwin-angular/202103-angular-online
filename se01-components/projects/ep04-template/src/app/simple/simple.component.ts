import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student, StudentModel } from './student.model';

@Component({
  templateUrl: './simple.component.html',
  providers: [StudentModel]
})
export class SimpleComponent {

  student: Student

  constructor(private model: StudentModel) {
    this.student = model.newStudent()
  }

  get interests(): string[] {
    return Object.keys(this.student.interests)
  }

  get list(): Student[] {
    return this.model.list
  }

  save(form: NgForm) {

    // Add Student to Model
    this.model.add(this.student)
    // Reset Form
    form.reset()
  }
}
