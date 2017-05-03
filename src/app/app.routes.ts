import {Route} from '@angular/router';
import {GeneralComponent} from './general/general.component';
import {SkillsComponent} from './skills/skills.component';
import {EducationComponent} from './education/education.component';
import {InterestsComponent} from './interests/interests.component';
import {ContactsComponent} from './contacts/contacts.component';

export const routes: Route[] = [
  {path: 'general', component: GeneralComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'education', component: EducationComponent},
  {path: 'interests', component: InterestsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '', redirectTo: 'skills', pathMatch: 'full'}
  ];
