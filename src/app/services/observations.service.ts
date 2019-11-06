import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as R from 'ramda';
import { CHARTS_LOOKUP_TABLE } from 'app/shared/headers-utility';

@Injectable({
    providedIn: 'root'
})
export class ObservationsService {

    observations$ = new BehaviorSubject([]);

    constructor(private http: HttpClient) { }

    public fetchObservations() {
        this.http.get("http://localhost:8080/dashboard/observations").subscribe((apps: any[]) => this.observations$.next(apps));
    }

    public postObservation(observation: any) {
        observation.observations = R.pluck('observation', observation.observations);
        this.http.post("http://localhost:8080/dashboard/observation", observation).subscribe(val => {
            this.fetchObservations();
        })
    }

    public updateObservation(observation: any) {
        observation.observations = R.pluck('observation', observation.observations);
        this.http.put("http://localhost:8080/dashboard/observation", observation).subscribe(val => {
            this.fetchObservations();
        })
    }

    public delete(id) {
        this.http.delete("http://localhost:8080/dashboard/observation/"+id).subscribe(val => {
            this.fetchObservations();
        })
    }

}