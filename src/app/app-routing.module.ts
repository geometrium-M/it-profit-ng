 import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from "@angular/router";
 import {UsersExampleComponent} from "./examples/comp/users-example/users-example.component";
 import {PipesExampleComponent} from "./examples/comp/pipes-example/pipes-example.component";
 import {ViewrefExampleComponent} from "./examples/comp/template-variables-example/viewref-example/viewref-example.component";
 import {NotFoundComponent} from "./examples/comp/not-found/not-found.component";
 import {ExamplesComponent} from "./examples/comp/examples/examples.component";

const routes: Routes = [
  {
    path: 'examples',
    component:ExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
     },
      {
        path: 'users',
        component: UsersExampleComponent,
      },
     {
        path: 'pipes',
        component: PipesExampleComponent,
     },
     {
        path: 'viewref',
        component: ViewrefExampleComponent,
     },
   ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  }

];

 @NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule {

}
