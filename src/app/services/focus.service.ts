import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as R from 'ramda';

@Injectable({
    providedIn: 'root'
})
export class FocusService {

    focusList$ = new BehaviorSubject([]);

    constructor(private http: HttpClient) { }

    public fetchFocusList() {
        this.http.get("http://localhost:8080/dashboard/focusList").subscribe((apps: any[]) => this.focusList$.next(apps));
    }

    public postFocus(achievement: any) {
        this.http.post("http://localhost:8080/dashboard/focus", achievement).subscribe(val => {
            this.fetchFocusList();
        })
    }

    public updateFocus(achievement: any) {
        this.http.put("http://localhost:8080/dashboard/focus", achievement).subscribe(val => {
            this.fetchFocusList();
        })
    }

    public delete(id) {
        this.http.delete("http://localhost:8080/dashboard/focus/"+id).subscribe(val => {
            this.fetchFocusList();
        })
    }

}