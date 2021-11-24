import { Component, OnInit, ViewChild } from '@angular/core';
import {Todo} from './../../../models/Todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  items: Todo[] = [];

  @ViewChild('todo') input:any;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        content: 'Read a book',
        completed: false
      },
      {
        content: 'Learn Angular',
        completed: false
      },
      {
        content: 'Take out the trash',
        completed: false
      }
    ]
  }

  addItems = (value: string) => {
    if(value!==""){
      this.items.push({content:value,completed:false});
      this.clearInputfield();
    }
    else{
      alert('Please insert a todo **')
    }
  }

  clearInputfield(){
    this.input.nativeElement.value = '';
  }

  toggleTodoStatus = (index: any) => {
    this.items[index].completed = !this.items[index].completed;
  }

  deleteTodo = (index: any) => {
    this.items.splice(index,1);
  }

}
