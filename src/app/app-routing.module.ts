import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AddTestComponent } from './add-test/add-test.component';
import { RemoveTestComponent } from './remove-test/remove-test.component';
import { ViewTestComponent } from './view-test/view-test.component';



const routes: Routes = [
  {path: 'add-test',component:AddTestComponent  },
  {path: 'remove-test',component:RemoveTestComponent  },
  {path: 'view-test',component:ViewTestComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
