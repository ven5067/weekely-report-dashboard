import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as R from 'ramda';
import { CHARTS_LOOKUP_TABLE } from 'app/shared/headers-utility';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    dashboardData: any = {
        "dashboard": {
            "charts": [
                {
                    "type": "PieChart",
                    "data": [["Completed", 95], ["Pending", 5]],
                    "title": "planning"
                },
                {
                    "type": "PieChart",
                    "data": [["Completed", 95], ["Pending", 5]],
                    "title": "planning"
                },
                {
                    "type": "PieChart",
                    "data": [["Completed", 95], ["Pending", 5]],
                    "title": "planning"
                },
                {
                    "type": "PieChart",
                    "data": [["Completed", 95], ["Pending", 5]],
                    "title": "planning"
                }
            ]
        },
        "org_chart": [
            {
                "category": "CEO / CO-FOUNDER",
                "name": "Alec Thompson",
                "description": "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
                "img": "./assets/img/faces/marc.jpg"
            },
            {
                "category": "CEO / CO-FOUNDER",
                "name": "Alec Thompson",
                "description": "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
                "img": "./assets/img/faces/marc.jpg"
            },
            {
                "category": "CEO / CO-FOUNDER",
                "name": "Alec Thompson",
                "description": "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
                "img": "./assets/img/faces/marc.jpg"
            },
            {
                "category": "CEO / CO-FOUNDER",
                "name": "Alec Thompson",
                "description": "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
                "img": "./assets/img/faces/marc.jpg"
            },
            {
                "category": "CEO / CO-FOUNDER",
                "name": "Alec Thompson",
                "description": "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
                "img": "./assets/img/faces/marc.jpg"
            },
            {
                "category": "CEO / CO-FOUNDER",
                "name": "Alec Thompson",
                "description": "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
                "img": "./assets/img/faces/marc.jpg"
            }
        ],
        "applications": {
            "headers": [
                "Application Name",
                "T-Mobile Session/Wiki/PK internal",
                "ProKarma Documentation",
                "HCL Shadow Support",
                "Reverse KT"
            ],
            "data": [
                {
                    "name": "DICE-BIMS (TIBCO [CE And BW]/RSP/ DSG Spring)",
                    "session": 100,
                    "documentation": 100,
                    "support": 5,
                    "reverse_kt": 0
                },
                {
                    "name": "DICE-FMS ((TIBCO [CE And BW]/RSP/ DSG Spring)",
                    "session": 100,
                    "documentation": 100,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "DICE-CAPS ((TIBCO [CE And BW]/RSP/ DSG Spring)",
                    "session": 100,
                    "documentation": 100,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "DICE-DTIS ((TIBCO [CE And BW]/RSP/DSG Spring)",
                    "session": 100,
                    "documentation": 100,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "DICE-UMS ((TIBCO [CE And BW]/RSP/DSG Spring)",
                    "session": 100,
                    "documentation": 100,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "Distributed Services Platform API (DSPA)",
                    "session": 0,
                    "documentation": 0,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "Customer Profile",
                    "session": 0,
                    "documentation": 0,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "APIGEE",
                    "session": 75,
                    "documentation": 75,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "EBS (OMNI Legacy)",
                    "session": 50,
                    "documentation": 50,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "OMS U2 & Digital",
                    "session": 50,
                    "documentation": 50,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "Order API",
                    "session": 50,
                    "documentation": 50,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "Order Fulfillment",
                    "session": 50,
                    "documentation": 50,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "Sterling Configurator",
                    "session": 0,
                    "documentation": 0,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "ODC",
                    "session": 25,
                    "documentation": 25,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "Operational Decision Manager -  ODM",
                    "session": 50,
                    "documentation": 0,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "DSG Tibco U2",
                    "session": 0,
                    "documentation": 0,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "Digital Notifications Domain",
                    "session": 50,
                    "documentation": 50,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "MetroPCS / EDA",
                    "session": 25,
                    "documentation": 25,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "Deep.io",
                    "session": 100,
                    "documentation": 100,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "Sentry / Customer Hub (CHUB) (U1 & U2)",
                    "session": 0,
                    "documentation": 0,
                    "support": 0,
                    "reverse_kt": 0
                },
                {
                    "name": "EDGE",
                    "session": 50,
                    "documentation": 50,
                    "support": 0,
                    "reverse_kt": 0
                }
            ],
            "weighted_avg": {
                "name": "Weighted Average",
                "session": 51,
                "documentation": 51,
                "support": 0,
                "reverse_kt": 0
            },
        },
        "transition_calendar": {
            "this_week": {
                "headers": ["Monday", "Tuesday", "Wednesday", "Thursaday", "Friday"],
                "data": [
                    {
                        "topic": ["Environment", "Tools & Processes"],
                        "moday": ["DSPA session 2", "OM systems wiki understanding, Dice Mock resolutions"],
                        "tuesday": ["Knowledge sharing session on Splunk observations", "Dice Mock resolutions"],
                        "wednesday": ["OM teams sync up, Dice teams sync up", "Apigee sync up", "DND sync up", "Slack channel monitoring", "Dice Mock resolutions"],
                        "thursday": ["OM teams sync up", "Dice teams sync up", "Apigee sync up", "DND sync up", "Slack channel monitoring", "Dice Mock resolutions"],
                        "friday": ["Prep work for Shadow support", "Global teams sync up"]
                    },
                ]
            },
            "next_week": {
                "headers": ["Monday", "Tuesday", "Wednesday", "Thursaday", "Friday"],
                "data": [
                    {
                        "topic": "Environment, Tools & Processes1",
                        "moday": ["HCL Shadow Support", "exercise live/closed tickets"],
                        "tuesday": ["HCL Shadow Support", "exercise live/closed tickets"],
                        "wednesday": ["HCL Shadow Support", "exercise live/closed tickets"],
                        "thursday": ["HCL Shadow Support", "exercise live/closed tickets"],
                        "friday": ["HCL Shadow Support", "exercise live/closed tickets"]
                    }
                ]
            }
        },
        "risks_mitigations": {
            "achievements": [
                "120 alerts/tickets mock resolutions done",
                "KT Sessions for 17 applications - TMO led and a few internal (PK) in progress",
                "Application/Reverse KT docs for 7 applications completed and remaining in progress",
                "Good knowledge on Monitoring and Analytics tools"
            ],
            "risks_mitigations": {
                "headers": ["Area", "Risk Details", "Impact (1-5)", "Mitigation Plan"],
                "data": [
                    {
                        "area": "None",
                        "risk_details": "NA",
                        "impact": "NA",
                        "mitigation_plan": "NA"
                    }
                ]
            }
        },
        "features": {
            "orgChart": false,
            "dashboard": true,
            "applications": true,
            "calendar": true,
            "risksMitigations": true,
            "observations": true,
            "achievementsFocus": true
        },
        'observations': [
            { 'observation': 'Alert maintenance', 'resolutions': ["Total 811 alerts set up in production and only 444 are enabled. Some alerts are generic and may not need action most of the times. i.e., few examples RSP PCF: Error% crossed threshold of 30%, DSG-DAMS: RSP PCF Avg response time crossing threshold.", "Agree with DevOps teams on cleaning up alerts, modifying thresholds, and validating."] },
            { 'observation': 'Alert Resolutions', 'resolutions': ["No centralised repository for errors/ resolutions", "Prepare various possible resolutions based on error codes/messages and store them in central repository(Wiki)"] },
            { 'observation': 'Slack Channels', 'resolutions': ["10’s of channels available for monitoring, disabling the effectiveness of monitoring and increasing the manual activity.", "Agree with DevOps team: Create a slack-bot to redirect messages to a critical/standard/non-critical alerts specific channels + acknowledge to the requestors"] }
        ]
    };

    application$ = new BehaviorSubject([]);
    charts$ = new BehaviorSubject({});

    constructor(private http: HttpClient) { }

    public fetchApplications() {
        this.http.get("http://localhost:8080/dashboard/application").subscribe((apps: any[]) => this.application$.next(apps));
    }

    public postApplication(application: any) {
        this.http.post("http://localhost:8080/dashboard/application", application).subscribe(val => {
            this.fetchApplications();
        })
    }

    public updateApplication(application: any) {
        this.http.put("http://localhost:8080/dashboard/application", application).subscribe(val => {
            this.fetchApplications();
        })
    }

    public deleteApplication(id) {
        this.http.delete("http://localhost:8080/dashboard/application/"+id).subscribe(val => {
            this.fetchApplications();
        })
    }

    public fetchDashboard() {
        this.application$.subscribe((data) => {
            const headers = Object.keys(CHARTS_LOOKUP_TABLE);
            const charts = [];

            headers.forEach(header => {
                charts.push(this.getChart(data, header))
            });

            this.charts$.next(charts);
        });
    }

    private getChart(data: any, header: string) {
        return {
            "type": "PieChart",
            "data": this.getPieData(data, header),
            "title": CHARTS_LOOKUP_TABLE[header]
        }
    }

    public getPieData(data: any, header: string) {
        const completedPercentage = this.findPercentage(R.pluck(header, data));
        return [['completed', completedPercentage], ['pending', (100 - completedPercentage)]];
    }

    public findPercentage(values: number[]) {
        console.log('values***', R.sum(values) / (values.length * 100) * 100);
        if(values.length === 0) return 0;
        return Math.round((R.sum(values) / (values.length * 100)) * 100);
    }
}
