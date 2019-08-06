import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersListSearchComponent } from "./suppliers-list-search/suppliers-list-search.component";
import { SupplierDetailsComponent } from "./supplier-details/supplier-details.component";
import { EditSupplierComponent } from "./edit-supplier/edit-supplier.component";
import { AddSupplierComponent } from "./add-supplier/add-supplier.component"
const routes: Routes = [
  {path:'', component:SuppliersListSearchComponent},
  {path:'supplierDetails/:id', component:SupplierDetailsComponent},
  {path:'supplierEdit/:id', component:EditSupplierComponent},
  {path:'add', component:AddSupplierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
