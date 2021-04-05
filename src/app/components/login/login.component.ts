import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GraphQLList } from 'graphql';
import { CHECK_USER } from 'src/app/graphql/queries';
import { User } from 'src/app/models/user';
import { GraphQLService } from 'src/app/services/graphql.service';
import { MeService } from 'src/app/services/me.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  id = '';
  errors = '';

  constructor(
    private graphqlService: GraphQLService,
    private router: Router,
    private meService: MeService
  ) {}

  async submit() {
    let intId = parseInt(this.id);

    const {
      data: dataUser,
      errors: errorsUser,
    } = await this.graphqlService.execute(CHECK_USER, { id: intId });

    if (errorsUser || dataUser.user_by_pk == null) {
      if (errorsUser != undefined) {
        console.log(errorsUser);
        this.errors = errorsUser.message;
      } else {
        this.errors = 'User not found';
      }
      return;
    }
    this.meService.login(dataUser.user_by_pk);

    this.router.navigateByUrl('/activities');
  }
}
