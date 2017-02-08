import { Component, OnInit, Inject } from '@angular/core';
import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'nav-menudesktop',
    template: require('./navmenudesktop.component.html'),
    styles: [require('./navmenudesktop.component.css')]
})
export class NavMenuDesktopComponent {
    constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: Document) {
    }

    public goToExperience(): void {
        let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#experience');
        this.pageScrollService.start(pageScrollInstance);
    };

    public goToAbout(): void {
        let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#about');
        this.pageScrollService.start(pageScrollInstance);
    };
}
