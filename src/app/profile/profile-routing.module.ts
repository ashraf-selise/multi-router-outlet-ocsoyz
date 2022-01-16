import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileOneComponent } from './profileOne/profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'p1', component: ProfileOneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
