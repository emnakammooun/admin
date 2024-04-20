import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  { path: 'hotels', redirectTo: 'hotels/index', pathMatch: 'full'},
  { path: 'hotels/index', component: IndexComponent },
  { path: 'hotels/create',component: CreateComponent},
  { path: 'hotels/edit/:id', component: EditComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
