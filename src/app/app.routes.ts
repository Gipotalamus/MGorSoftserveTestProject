import {Route} from '@angular/router';
import {GeneralComponent} from "./general/general.component";

export const routes: Route[] = [
  {path: ':direction', component: GeneralComponent},
  {path: '', redirectTo: 'general', pathMatch: 'full'}
  ];
