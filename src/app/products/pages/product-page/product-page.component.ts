import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  private fb = inject(FormBuilder);
  public color: string = 'red';
  public productForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.email
    ]
    ],
  })

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, () => (~~(Math.random() * 16)).toString(16));
  }
}
