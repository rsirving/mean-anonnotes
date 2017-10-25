import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(private _task: TaskService) { }

  ngOnInit() {
  }

}
