import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { TODO_ENDPOINT } from "../app.constants";
import { Observable, pluck } from "rxjs";
import { Todo } from '../models/Todo.interface';

@Injectable({
    providedIn: 'root'
})

export class TodoService{
constructor(private http: HttpClient){
}

getTodos(): Observable<any>{
    return this.http.get(TODO_ENDPOINT).pipe(pluck('todos'));
}
}