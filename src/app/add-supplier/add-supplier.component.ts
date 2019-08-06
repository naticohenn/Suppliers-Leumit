import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { supplierService } from "../supplier.service";

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {
  addSupplierForm : FormGroup;
  constructor(private _formBuilder: FormBuilder, private _supplierService : supplierService ) {this.createForm(); }
  addSaveMsg;
  addSaveOn = false;
  ngOnInit() {
  }
  createForm(){
    this.addSupplierForm = this._formBuilder.group({
      supplier_name: ['', Validators.required],
      supplier_address: ['', Validators.required],
      supplier_id: ['', Validators.required],
      supplier_email: ['', Validators.required],
      supplier_services: ['', Validators.required],
    });
  }
  //Add supplier method
  addSupplier(supplier_name,supplier_address,supplier_id,supplier_email,supplier_services){
    this._supplierService.addSupplier(supplier_name,supplier_address,supplier_id,supplier_email,supplier_services)
    this.addSaveOn = true
    this.addSaveMsg = "Supplier Added Successfully"
  }
}
