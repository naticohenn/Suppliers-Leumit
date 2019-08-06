import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { supplierService } from "../supplier.service";

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {
  chosenSupplier
  constructor(private _activatedRoute: ActivatedRoute,private _supplierService : supplierService) { }
  ngOnInit() {
    let suppliersList = this._supplierService.getSuppliers()
    this._activatedRoute.paramMap.subscribe(pMap => {
      const id = parseInt(pMap.get('id')) 
      this.chosenSupplier = suppliersList[suppliersList.findIndex(i => i.supplier_id == id)]
    });
  };

}
