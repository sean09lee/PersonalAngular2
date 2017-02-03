import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'experience',
    template: require('./experience.component.html')
})
export class ExperienceComponent {
    public experiences: WorkExperience[];

    constructor(http: Http) {
        http.get('/api/WorkExperience/Experiences').subscribe(result => {
            this.experiences = result.json();
        });
    }
}

interface WorkExperience {
    title: string;
    description: string;
    subtitle: string;
    route: string;
    classname: string;
}
