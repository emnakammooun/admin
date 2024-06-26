import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  { path: 'clients', redirectTo: 'clients/index', pathMatch: 'full'},
  { path: 'clients/index', component: IndexComponent },
  { path: 'clients/create',component: CreateComponent},
  { path: 'clients/edit/:id', component: EditComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
