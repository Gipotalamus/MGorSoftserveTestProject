import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { GeneralComponent } from './general/general.component';
import {JsonReaderService} from './service/json-reader.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactsComponent } from './contacts/contacts.component';
import { InterestsComponent } from './interests/interests.component';

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
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JsonReaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
