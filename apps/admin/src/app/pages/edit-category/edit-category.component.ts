import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormControl } from '@angular/forms';
import { CategoryService } from './../../../../../../libs/shared/src/lib/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'admin-editcategory',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
  providers: [CategoryService]

})
export class EditCategoryComponent implements OnInit {

  id: "" | undefined

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private location: Location) {}
  cateForm = new FormGroup({
    label: new UntypedFormControl('',),
    icon: new UntypedFormControl('',),
    color: new UntypedFormControl('',),
  })
  ngOnInit(): void {
      this.route.params.subscribe((params:any) => {
          this.categoryService.getCategory(params.id).subscribe(res => {
            this.id = params.id
            this.cateForm.patchValue(res.category)
          })
      })
  }

  submit(form: FormGroup) {

    if(form.invalid) {
      return
    }

    this.updateCategory(form)

  }

  updateCategory(form : FormGroup) {
    this.categoryService.upCategory(this.id, form.value).subscribe(res => {
      if (res.success) {
        this.location.back();
      }
    }, err => console.error(err));
  }


}
