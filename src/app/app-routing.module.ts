import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {EscapingOnloadComponent} from './pages/escapingOnload/escapingOnload.component';
import {EscapingTagComponent} from './pages/escapingTag/escapingTag.component';
import {EscapingValueComponent} from './pages/escapingValue/escapingValue.component';
import {SanitizedHrefComponent} from './pages/sanitizedHref/sanitizedHref.component';
import {SanitizedTagComponent} from './pages/sanitizedTag/sanitizedTag.component';
import {SanitizedValueComponent} from './pages/sanitizedValue/sanitizedValue.component';
import {SimpleCommentComponent} from './pages/simpleComment/simpleComment.component';
import {SimpleTagComponent} from './pages/simpleTag/simpleTag.component';
import {SimpleValueComponent} from './pages/simpleValue/simpleValue.component';

const routes: Routes = [
  {path: 'escapingOnload', component: EscapingOnloadComponent},
  {path: 'escapingTag', component: EscapingTagComponent},
  {path: 'escapingValue', component: EscapingValueComponent},
  {path: 'sanitizedHref', component: SanitizedHrefComponent},
  {path: 'sanitizedTag', component: SanitizedTagComponent},
  {path: 'sanitizedValue', component: SanitizedValueComponent},
  {path: 'simpleComment', component: SimpleCommentComponent},
  {path: 'simpleTag', component: SimpleTagComponent},
  {path: 'simpleValue', component: SimpleValueComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '/'} // Wildcard Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
