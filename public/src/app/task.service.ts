import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {

  constructor(private _http: Http) { }

  addNote(note) {
    return this._http.post('/api/addNote', note);
  }

  getNotes() {
    return this._http.get('/api/getNotes');
  }

}
