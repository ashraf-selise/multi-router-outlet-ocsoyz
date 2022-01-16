import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    children: [
      { path: 'detail', component: DetailComponent },
      { path: 'detail/:id', component: DetailComponent, outlet: 'detail' },
      { path: 'someUrl/:id', component: DetailComponent, outlet: 'popup' }
    ]
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
