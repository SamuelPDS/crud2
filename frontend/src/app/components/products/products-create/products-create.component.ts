import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

constructor(private productService: ProductService){}

ngOnInit(): void{

}

createProduct(): void{
  this.productService.showMessage('Operação executada com sucesso')
}
}
