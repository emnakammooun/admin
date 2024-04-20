import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'regions', redirectTo: 'regions/index', pathMatch: 'full'},
  { path: 'regions/index', component: IndexComponent },
  { path: 'regions/create',component: CreateComponent},
  { path: 'regions/edit/:id', component: EditComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule { }
