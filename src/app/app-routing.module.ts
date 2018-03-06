import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './site/body/body.component';
import { FunnelComponent } from './site/funnel/funnel.component';

// default wordt geroute naar de BodyComponent
const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: BodyComponent},
  {path: 'funnel', component: FunnelComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
