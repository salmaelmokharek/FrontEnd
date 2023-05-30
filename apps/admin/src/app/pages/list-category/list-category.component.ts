import { Location } from "@angular/common";
import { Category, ResCategory } from '@frontcoding/shared';
import { CategoryService } from './../../../../../../libs/shared/src/lib/services/category.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'admin-listcategory',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css'],
  providers: [CategoryService]
})
export class ListCategoryComponent implements OnInit {

  categories: Category[] = []

  showForm = false

  catForm = new FormGroup({
    label: new UntypedFormControl('',[Validators.required,Validators.minLength(2), Validators.maxLength(20)]),
    icon: new UntypedFormControl(),
    color: new UntypedFormControl(),
  })

  constructor(private categoryService: CategoryService ,private location: Location ){}

  ngOnInit() {
    this.getCategories();
  }
  getCategories(){
    this.categoryService.getAllCategories().subscribe((res: ResCategory) =>{
      if (res) {
        this.categories = res.myCategories;
      }
      console.log(this.categories);
    }
    );
  }

  submit(form: FormGroup) {

    if(form.invalid) {
      return
    }

    this.createCategory()

  }

  createCategory() {
    this.categoryService.addCategory(this.catForm.value).subscribe(response => {
      if(response.success) {
        this.location.historyGo(0)


      }
    },
    err => console.error(err))
  }


  toggleForm(){
    this.showForm =!this.showForm

  }

  deleteCategory(_id: string | undefined) {
    this.categoryService.deleteCategory(_id).subscribe((res) => {
      this.categories = this.categories.filter(category => category._id != _id)

    })
  }

}
