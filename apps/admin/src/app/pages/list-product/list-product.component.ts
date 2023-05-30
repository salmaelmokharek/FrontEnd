import { ProductService } from './../../../../../../libs/shared/src/lib/services/product.service';
import { FormArray, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Product, ResProduct } from './../../../../../../libs/shared/src/lib/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-listproduct',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {

  products : Product[]= []


productForm = new FormGroup({
  title: new UntypedFormControl('', [Validators.required, Validators.minLength(4)]),
  description: new UntypedFormControl(),
  content: new UntypedFormControl(),
  brand: new UntypedFormControl(),
  countStock: new UntypedFormControl(0),
  price: new UntypedFormControl(),
  thumbnail: new UntypedFormControl(),
  images: new FormArray([]),
  rating: new UntypedFormControl(0, [Validators.min(0), Validators.max(5)]),
  isFeatured: new UntypedFormControl(false),
  category: new UntypedFormControl()
});


  constructor(private productService : ProductService){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getAllProducts().subscribe((res: ResProduct) => {
      if (res) {
        this.products = res.myProducts
      }
      console.log(this.products);

    });

}
}
