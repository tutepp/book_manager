import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatComponent } from './book/creat/creat.component';
import { DetailComponent } from './book/detail/detail.component';
import { ListComponent } from './book/list/list.component';
import { UpdateComponent } from './book/update/update.component';

const routes: Routes = [
{

  path:'books',
  component: ListComponent

},

{
  path:'detail/:id',
  component: DetailComponent
},

{
  path:'update/:id',
  component: UpdateComponent
},

{
  path:'create',
  component: CreatComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
