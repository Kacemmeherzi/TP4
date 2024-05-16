import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { NotExpr } from '@angular/compiler';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,TasksListComponent],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  tasks: string[] = [];
  newTask: string = '';
  constructor() { }
  ngOnInit(): void {
  }
  addTask() {
  if (this.newTask.trim() !== '') {
    console.log("added"+this.newTask);
    
  this.tasks.push(this.newTask);
  this.newTask = '';
  }
  }
}
