import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileOneComponent } from './profileOne/profileOne.component';

@NgModule({
  imports: [CommonModule, ProfileRoutingModule],
  declarations: [ProfileComponent, ProfileOneComponent],
})
export class ProfileModule {}
