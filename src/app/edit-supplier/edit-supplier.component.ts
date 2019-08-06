import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Supplier } from "../../assets/supplier_model";
import { supplierService } from '../supplier.service';


@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})

export class EditSupplierComponent implements OnInit {

  constructor(private _activatedRoute : ActivatedRoute , private _formBuilder: FormBuilder, private _supplierService : supplierService) { }
  editForm : FormGroup;
  choosenSupplierEdit : Supplier;
  supplierList;
  editSaveMsg;
  editSaveOn = false;
  ngOnInit() {
    this.supplierList = this._supplierService.getSuppliers();
    this._activatedRoute.paramMap.subscribe(pMap => {
      const id = parseInt(pMap.get('id')) 
       this.choosenSupplierEdit = this.supplierList[this.supplierList.findIndex(i => i.supplier_id == id)]
    });
    //Edit Form
    this.editForm = this._formBuilder.group({
      supplier_name: [this.choosenSupplierEdit.supplier_name],
      supplier_address: [this.choosenSupplierEdit.supplier_address],
      supplier_id: [this.choosenSupplierEdit.supplier_id],
      supplier_email: [this.choosenSupplierEdit.supplier_email],
      supplier_services: [this.choosenSupplierEdit.supplier_services],
    });
  }
  //Save and up date the supplier
  saveSupplier(){
    this.choosenSupplierEdit.supplier_name = this.editForm.controls.supplier_name.value 
    this.choosenSupplierEdit.supplier_address = this.editForm.controls.supplier_address.value 
    this.choosenSupplierEdit.supplier_id = this.editForm.controls.supplier_id.value 
    this.choosenSupplierEdit.supplier_email = this.editForm.controls.supplier_email.value 
    this.choosenSupplierEdit.supplier_services = this.editForm.controls.supplier_services.value 
      for (let i = 0; i < this.choosenSupplierEdit.length ; i++) {
        this.choosenSupplierEdit[i].supplier_name = this.editForm.controls.supplier_name.value 
        this.choosenSupplierEdit[i].supplier_address = this.editForm.controls.supplier_address.value 
        this.choosenSupplierEdit[i].supplier_id = this.editForm.controls.supplier_id.value 
        this.choosenSupplierEdit[i].supplier_email = this.editForm.controls.supplier_email.value 
        this.choosenSupplierEdit[i].supplier_services = this.editForm.controls.supplier_services.value 
        } 
        localStorage.setItem('suppliers',JSON.stringify(this.supplierList))
        this.editSaveMsg = "Supplier Successfully saved"
        this.editSaveOn = true
      }
  }

