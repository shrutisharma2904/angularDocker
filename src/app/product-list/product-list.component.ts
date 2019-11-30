import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 product = []
  constructor(private service:ProductService) { }

  ngOnInit() {
    this.service.Select().subscribe(response =>{
      if(response['status'] === 'success'){
        this.product = response['data'] as any[]
      } else{
        console.log('error',response['error'])
      }
    })
  }

}
