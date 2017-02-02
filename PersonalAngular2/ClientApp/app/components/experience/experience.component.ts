import { Component } from '@angular/core';

@Component({
    selector: 'experience',
    template: require('./experience.component.html')
})
export class ExperienceComponent {
    public experiences: WorkExperience[];

    constructor(http: Http) {
        http.get('/api/SampleData/WeatherForecasts').subscribe(result => {
            this.experiences = result.json();
        });
    }
}

interface WorkExperience {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
