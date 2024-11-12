import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericComponent } from './generic/generic.component';
import { FooComponent } from './foo/foo.component';

const routes: Routes = [
  { path: 'generic/:id', component: GenericComponent },
  { path: 'foo', component: FooComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
