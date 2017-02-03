import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { NavMenuDesktopComponent } from './components/navmenu/navmenudesktop.component';
import { HomeComponent } from './components/home/home.component';
import { GeneralMillsComponent } from './components/generalmills/generalmills.component';
import { SparkstarterComponent } from './components/sparkstarter/sparkstarter.component';
import { GEHealthcareComponent } from './components/gehealthcare/gehealthcare.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        NavMenuDesktopComponent,
        GeneralMillsComponent,
        SparkstarterComponent,
        GEHealthcareComponent,
        AboutComponent,
        ContactComponent,
        ExperienceComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'experience', component: ExperienceComponent },
            { path: 'generalmills', component: GeneralMillsComponent },
            { path: 'sparkstarter', component: SparkstarterComponent },
            { path: 'gehealthcare', component: GEHealthcareComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
