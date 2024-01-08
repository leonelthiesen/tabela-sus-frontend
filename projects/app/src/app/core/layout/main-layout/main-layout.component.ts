import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Observable } from 'rxjs';

import { SettingsFacade } from '../../settings/settings.facade';
import { AsyncPipe } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'ts-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatSidenavModule, MatListModule, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, FaIconComponent, RouterOutlet, AsyncPipe]
})
export class MainLayoutComponent implements OnInit {
    @ViewChild('sidenav') sidenav?: MatSidenav;
    showHeader = false;
    showSidebar = false;
    showFooter = false;
    reason = '';
    year = new Date().getFullYear();
    themeClass$: Observable<string> = this.settingsFacade.themeClass$;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private settingsFacade: SettingsFacade) { }

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd && this.activatedRoute.firstChild) {
                this.showHeader = this.activatedRoute.firstChild.snapshot.data.showHeader !== false;
                this.showSidebar = this.activatedRoute.firstChild.snapshot.data.showSidebar !== false;
                this.showFooter = this.activatedRoute.firstChild.snapshot.data.showFooter !== false;
            }
        });
    }

    close(reason: string) {
      this.reason = reason;
      this.sidenav?.close();
    }
}
