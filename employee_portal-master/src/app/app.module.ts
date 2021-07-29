import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

/*Perfect Sidebar Module*/
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

/*Import 3rd party Components*/
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*CoreUI Modules*/
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

/*Import routing module*/
import { AppRoutingModule } from './app.routing';

/*Services*/
import { LoggerService } from './services/logger/logger.service';
import { ConsoleLoggerService } from './services/console-logger/console-logger.service';
import { AdapterService } from './services/adapter/adapter.service';
import { OauthService } from './services/oauth/oauth.service';

/*Views*/
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/main/main.component';
import { ToolbarComponent } from './views/core/toolbar/toolbar.component';
import { SideNavComponent } from './views/core/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ToolbarComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  exports: [ ToolbarComponent, SideNavComponent ],
  providers: [ AdapterService, OauthService ,{ provide: LoggerService, useClass: ConsoleLoggerService } ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}
