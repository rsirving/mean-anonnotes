import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TaskService } from './../task.service';
import 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  note = {
    text: '',
    date: null
  }
  notes = [];

  constructor(private _task: TaskService) { }

  ngOnInit() {
    this.getNotes();
  }

  onSubmit(){
    let today: Date = new Date();
    console.log(today);
    this.note.date = today;
    this._task.addNote(this.note)
    .toPromise()
    .then(
      (res) => {
        console.log(res);
        this.getNotes();
        this.note.text = "";
      }
    )
    .catch(
      (err) => {
        console.log(err);
      }
    )
  }

  getNotes(){
    this._task.getNotes()
    .toPromise()
    .then(
      (res) => {
        this.notes = res.json();
        this.notes.sort(function(a, b){
          var dateA = a.date;
          var dateB = b.date;
          if (dateA > dateB){
            return -1;
          } else {
            return 1;
          }
        })
      }
    ),
    (err) => {
      console.log(err);
    }
  }

}
