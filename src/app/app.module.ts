import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { SuppliersListSearchComponent } from './suppliers-list-search/suppliers-list-search.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component'
import { supplierService } from "./supplier.service";
@NgModule({
  declarations: [
    AppComponent,
    SupplierDetailsComponent,
    SuppliersListSearchComponent,
    EditSupplierComponent,
    AddSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [supplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
