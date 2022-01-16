import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileOneComponent } from './profileOne/profileOne.component';

const routes: Routes = [
  { path: 'p1', component: ProfileOneComponent },
  { path: '', component: ProfileComponent, redirectTo: '/p1' },
  ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
