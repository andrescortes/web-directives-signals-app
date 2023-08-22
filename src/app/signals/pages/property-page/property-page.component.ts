import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'signals-property-page',
  templateUrl: './property-page.component.html',
  styleUrls: ['./property-page.component.css']
})
export class PropertyPageComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
  }


  public counter = signal<number>(10);
  public user = signal<User>({
    id: 1,
    first_name: 'George',
    last_name: 'Bluth',
    email: 'NjG6k@example.com',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  });

  public fullName = computed<string>(() => {
    if (!this.user()) return 'User not found';
    return `${this.user().first_name} ${this.user().last_name}`;
  });

  public userChangedEffect = effect(() => {
    console.log(`User: ${this.user().first_name} - ${this.counter()}`);
  })

  // ngOnInit(): void {
  //   setInterval(() => {
  //     this.counter.update(n => n + 1);
  //     // if (this.counter() == 15) {
  //     //   this.userChangedEffect.destroy();
  //     // }
  //   }, 1000);
  // }

  onFieldChange(field: keyof User, value: string) {

    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // })

    // this.user.update(currentUser => {
    //   return {
    //     ...currentUser,
    //     [field]: value
    //   }
    // });

    this.user.mutate(currentUser => {
      switch (field) {
        case 'first_name':
          currentUser.first_name = value;
          break;
        case 'last_name':
          currentUser.last_name = value;
          break;
        case 'email':
          currentUser.email = value;
          break;
      }
    });
  }

  increaseBy(value: number) {
    this.counter.update(n => n + value);
  }

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }
}
