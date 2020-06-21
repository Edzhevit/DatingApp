import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {JwtModule} from '@auth0/angular-jwt';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxGalleryModule} from 'ngx-gallery-9';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {FileUploadModule} from 'ng2-file-upload';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {NavComponent} from './nav/nav.component';
import {MemberListComponent} from './members/member-list/member-list.component';
import {ListsComponent} from './lists/lists.component';
import {MessagesComponent} from './messages/messages.component';
import {MemberCardComponent} from './members/member-card/member-card.component';
import {MemberDetailComponent} from './members/member-detail/member-detail.component';
import {MemberEditComponent} from './members/member-edit/member-edit.component';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';

import {AuthService} from './services/auth.service';
import {AlertifyService} from './services/alertify.service';
import {UserService} from './services/user.service';
import {ErrorInterceptorProvider} from './services/error.interceptor';
import {appRoutes} from './routes';
import {AuthGuard} from './guards/auth.guard';

import {MemberDetailResolver} from './resolvers/member-detail-resolver';
import {MemberListResolver} from './resolvers/member-list-resolver';
import {MemberEditResolver} from './resolvers/member-edit-resolver';
import {PreventUnsavedChangesGuard} from './guards/prevent-unsaved-changes.guard';
import {ListsResolver} from './resolvers/lists.resolver';
import {MessagesResolver} from './resolvers/messages.resolver';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HasRoleDirective } from './directives/has-role.directive';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { PhotoManagementComponent } from './admin/photo-management/photo-management.component';
import {AdminService} from './services/admin.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    MemberMessagesComponent,
    AdminPanelComponent,
    HasRoleDirective,
    UserManagementComponent,
    PhotoManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    FileUploadModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    })
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    PreventUnsavedChangesGuard,
    ListsResolver,
    MessagesResolver,
    AdminService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
