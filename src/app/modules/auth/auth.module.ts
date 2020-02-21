import {NgModule} from '@angular/core';
import {AuthPage} from 'src/app/pages/auth/auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginFormComponent} from 'src/app/components/login-form/login-form.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [AuthPage, LoginFormComponent],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {
}
