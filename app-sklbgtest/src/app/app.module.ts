import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { SchoolRegistrationFormComponent } from './components/school-registration-form/school-registration-form.component';
import { SchoolsDirectoryComponent } from './components/schools-directory/schools-directory.component';
import { SchoolsWidgetComponent } from './components/schools-widget/schools-widget.component';

import { SchoolService } from "./services/school/school.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    FilterPanelComponent,
    SchoolRegistrationFormComponent,
    SchoolsDirectoryComponent,
    SchoolsWidgetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    SchoolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
