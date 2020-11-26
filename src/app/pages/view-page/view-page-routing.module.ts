import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPagePage } from './view-page.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPagePageRoutingModule {}
