import {routes} from './app.routes';
import { GeneralComponent } from './general/general.component';
import {JsonReaderService} from './service/json-reader.service';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactsComponent } from './contacts/contacts.component';
import { InterestsComponent } from './interests/interests.component';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GeneralComponent,
    SkillsComponent,
    EducationComponent,
    ContactsComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [JsonReaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
