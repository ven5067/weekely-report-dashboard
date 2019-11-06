import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as R from 'ramda';

@Injectable({
    providedIn: 'root'
})
export class AchievementService {

    achievements$ = new BehaviorSubject([]);

    constructor(private http: HttpClient) { }

    public fetchAchievements() {
        this.http.get("http://localhost:8080/dashboard/achievements").subscribe((apps: any[]) => this.achievements$.next(apps));
    }

    public postAchievement(achievement: any) {
        this.http.post("http://localhost:8080/dashboard/achievement", achievement).subscribe(val => {
            this.fetchAchievements();
        })
    }

    public updateAchievement(achievement: any) {
        this.http.put("http://localhost:8080/dashboard/achievement", achievement).subscribe(val => {
            this.fetchAchievements();
        })
    }

    public delete(id) {
        this.http.delete("http://localhost:8080/dashboard/achievement/"+id).subscribe(val => {
            this.fetchAchievements();
        })
    }

}