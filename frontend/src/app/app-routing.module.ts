import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductsCrudComponent} from './views/products-crud/products-crud.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "products",
  component: ProductsCrudComponent
}, {
  path: "products/create",
  component:ProductsCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
