import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as R from 'ramda';

@Injectable({
    providedIn: 'root'
})
export class RiskService {

    risks$ = new BehaviorSubject([]);

    constructor(private http: HttpClient) { }

    public fetchRisks() {
        this.http.get("http://localhost:8080/dashboard/risks").subscribe((apps: any[]) => this.risks$.next(apps));
    }

    public postRisk(risk: any) {
        this.http.post("http://localhost:8080/dashboard/risk", risk).subscribe(val => {
            this.fetchRisks();
        })
    }

    public updateRisk(risk: any) {
        this.http.put("http://localhost:8080/dashboard/risk", risk).subscribe(val => {
            this.fetchRisks();
        })
    }

    public delete(id) {
        this.http.delete("http://localhost:8080/dashboard/risk/"+id).subscribe(val => {
            this.fetchRisks();
        })
    }

}