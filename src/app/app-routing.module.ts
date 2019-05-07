import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { testcomponent } from '../components/testcomponent/testcomponent.component';

const routes: Routes = [
  {
    path: 'test',
    component: testcomponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
