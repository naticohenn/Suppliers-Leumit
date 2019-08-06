export class Init {
    load() {
      if(localStorage.getItem('suppliers') === null || localStorage.getItem('suppliers') == undefined) {
        let suppliers = [
            {supplier_name:"Asota Ashdod", supplier_address:"Menahem Begin 2, Ashdod", supplier_id:11, supplier_phone:"08-5217777", supplier_email:"ashdod@asota.com", supplier_services:"MRI,Rentgen,First AID"},
            {supplier_name:"Asota Tel-Aviv", supplier_address:"HaBarzel 6, Tel-Aviv", supplier_id:12, supplier_phone:"03-5217777", supplier_email:"ashdod@telaviv.com", supplier_services:"Ultrasound,Rentgen,First AID"},
            {supplier_name:"Tel Aviv Sourasky Medical Center", supplier_address:"Weizman 68, Tel-Aviv", supplier_id:13, supplier_phone:"03-5215555", supplier_email:"sourasky@sourasky.com", supplier_services:"Ultrasound,MRI,Rentgen,First AID"},
            {supplier_name:"Emek Medical Center", supplier_address:"Rabin 21, Afula", supplier_id:14, supplier_phone:"04-2217777", supplier_email:"emek@emek.com", supplier_services:"MRI,CT,Rentgen,First AID"},
            {supplier_name:"Terem Modiin", supplier_address:"Emek a ela, Modiin", supplier_id:15, supplier_phone:"972-5217777", supplier_email:"terem@modiin.com", supplier_services:"MRI,Ultrasound,Rentgen,First AID"},
            {supplier_name:"Medical City Haifa", supplier_address:"Menahem Begin 62, Haifa", supplier_id:16, supplier_phone:"04-5777777", supplier_email:"medical@haifa.com", supplier_services:"MRI,Rentgen,First AID"},
            {supplier_name:"Bikor Rofe Yokneam", supplier_address:"Tamar 4, Yokneam", supplier_id:17, supplier_phone:"04-5897977", supplier_email:"yokneam@bikorrofe.com", supplier_services:"MRI,Rentgen,First AID"}
        ];
  
        localStorage.setItem('suppliers', JSON.stringify(suppliers));
        return 
      } else {
      }
    }
  }