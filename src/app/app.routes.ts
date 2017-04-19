import {Route} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {EducationComponent} from './education/education.component';
import {HomeComponent} from './home/home.component';
export const routes: Route[] = [
  {path: 'about', component: AboutComponent},
  {path: 'education', component: EducationComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'}
  ];
