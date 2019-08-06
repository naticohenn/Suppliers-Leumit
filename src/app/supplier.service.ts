import { Injectable } from '@angular/core';
import { Init } from '../assets/init-suppliers';

@Injectable()
export class supplierService extends Init {

  constructor() {
    super();
    this.load();
   }
   getSuppliers() {
     let suppliers = JSON.parse(localStorage.getItem('suppliers'));
     return suppliers;
   }
   addSupplier(supplier_name,supplier_address,supplier_id,supplier_email,supplier_services ) {
      const obj ={
        supplier_name: supplier_name,
        supplier_address: supplier_address,
        supplier_id: supplier_id,
        supplier_email: supplier_email,
        supplier_services: supplier_services 
      }
      let suppliers = JSON.parse(localStorage.getItem('suppliers'));
      suppliers.push(obj);
      localStorage.setItem('suppliers', JSON.stringify(suppliers));
   }
}