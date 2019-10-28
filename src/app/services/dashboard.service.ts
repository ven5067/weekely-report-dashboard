import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  dashboardData: any = {
    "dashboard": {
        "charts": [
            {
                "title": "Pie Chart",
                "type": "PieChart",
                "columnNames": ["Task", "Pecentage by Week"],
                "data": [["Planned", 40], ["Actual", 60]],
                "roles": [],
                "body": {
                    "title": "Planning",
                    "description": "some text"
                }
            },
            {
                "title": "Pie Chart",
                "type": "PieChart",
                "columnNames": ["Task", "Pecentage by Week"],
                "data": [["Planned", 40], ["Actual", 60]],
                "roles": [],
                "body": {
                    "title": "Planning",
                    "description": "some text"
                }
            },
            {
                "title": "Pie Chart",
                "type": "PieChart",
                "columnNames": ["Task", "Pecentage by Week"],
                "data": [["Planned", 40], ["Actual", 60]],
                "roles": [],
                "body": {
                    "title": "Planning",
                    "description": "some text"
                }
            },
            {
                "title": "Pie Chart",
                "type": "PieChart",
                "columnNames": ["Task", "Pecentage by Week"],
                "data": [["Planned", 40], ["Actual", 60]],
                "roles": [],
                "body": {
                    "title": "Planning",
                    "description": "some text"
                }
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
                "support": 0,
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
                "name": "IBM Sterling Order Management Systems - OMS/OMNI U1 & U2",
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
                "name": "IBM WebSphere Commerce Search (WCS)",
                "session": 0,
                "documentation": 0,
                "support": 0,
                "reverse_kt": 0
            },
            {
                "name": "Notification",
                "session": 50,
                "documentation": 50,
                "support": 0,
                "reverse_kt": 0
            },
            {
                "name": "MetroPCS",
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
            "headers": ["Topic", "Monday", "Tuesday", "Wednesday", "Thursaday", "Friday"],
            "data": [
                {
                    "topic": "Environment, Tools & Processes",
                    "moday": "--",
                    "tuesday": "--",
                    "wednesday": "TBD",
                    "thursday": "TBD",
                    "friday": "TBD"
                },
                {
                    "topic": "Application Transition",
                    "moday": "--",
                    "tuesday": "Apigee Session2",
                    "wednesday": "Shadow Time",
                    "thursday": "Shadow Time",
                    "friday": "Shadow Time"
                },
                {
                    "topic": "Reverse KT",
                    "moday": "Document Preparation",
                    "tuesday": "--",
                    "wednesday": "TBD",
                    "thursday": "TBD",
                    "friday": "TBD"
                },
                {
                    "topic": "Shadow Support",
                    "moday": "Shadow Dice, Order Management",
                    "tuesday": "--",
                    "wednesday": "TBD",
                    "thursday": "TBD",
                    "friday": "TBD"
                }
            ]
        },
        "next_week": {
            "headers": ["Topic", "Monday", "Tuesday", "Wednesday", "Thursaday", "Friday"],
            "data": [
                {
                    "topic": "Environment, Tools & Processes1",
                    "moday": "--",
                    "tuesday": "--",
                    "wednesday": "TBD",
                    "thursday": "TBD",
                    "friday": "TBD"
                },
                {
                    "topic": "Application Transition",
                    "moday": "--",
                    "tuesday": "Apigee Session2",
                    "wednesday": "Shadow Time",
                    "thursday": "Shadow Time",
                    "friday": "Shadow Time"
                },
                {
                    "topic": "Reverse KT",
                    "moday": "Document Preparation",
                    "tuesday": "--",
                    "wednesday": "TBD",
                    "thursday": "TBD",
                    "friday": "TBD"
                },
                {
                    "topic": "Shadow Support",
                    "moday": "Shadow Dice, Order Management",
                    "tuesday": "--",
                    "wednesday": "TBD",
                    "thursday": "TBD",
                    "friday": "TBD"
                }
            ]
        }
    },
    "risks_mitigations": {
      "achievements": [
          "Wave 2 application KT kicked off",
          "Triage process explanations and team's understanding of operations enhnaced",
          "Apigee walkthrough - futher session to continue the week next"
      ],
      "risks_mitigations": {
          "headers": ["Area", "Risk Details", "Impact (1-5)", "Mitigation Plan"],
          "data": [
              {
                  "area": "Tools/Env/Process",
                  "risk_details": "Triage process specifics/documentation",
                  "impact": "2",
                  "mitigation_plan": "Increase shadow support time"
              },
              {
                  "area": "Application KT",
                  "risk_details": "Coverage of critical applications/operations other than Dice",
                  "impact": "5",
                  "mitigation_plan": "Schedule SME time for KT sessions and shadow opearions team"
              }
          ]
      }
  },
    "features": {
      "orgChart": false,
      "dashboard": true,
      "applications": true,
      "calendar": true,
      "risksMitigations": true
    }
};

  constructor(private http: HttpClient) { }

  public getJSON() {
    this.http.get("./assets/json/weekely-report-dashboard.json").subscribe((res) => {
      console.log('res**', res);
      this.dashboardData = res;
    });
  }
}
