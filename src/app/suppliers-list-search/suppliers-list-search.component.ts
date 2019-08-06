import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { SuppliersList } from "../../assets/mock-suppliers";
import { supplierService } from "../supplier.service";

@Component({
  selector: 'app-suppliers-list-search',
  templateUrl: './suppliers-list-search.component.html',
  styleUrls: ['./suppliers-list-search.component.css']
})
export class SuppliersListSearchComponent implements OnInit {

  suppliers_list ;
  supplierFilterd = SuppliersList;
  searchBox = new FormControl('');
  constructor(private _supplierService : supplierService) { }

  ngOnInit() {
    this.suppliers_list = this._supplierService.getSuppliers()
    console.log(this.suppliers_list)
  }
  //Search method
 searchFitler(searchInput : string){
    this.supplierFilterd = searchInput ? this.suppliers_list.filter(p  => 
     (p.supplier_name.toLowerCase().includes(searchInput.toLowerCase())) || (p.supplier_id.toString() == searchInput)) : this.suppliers_list;
  };  
}
  

