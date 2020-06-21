import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MemberListComponent} from './members/member-list/member-list.component';
import {MessagesComponent} from './messages/messages.component';
import {ListsComponent} from './lists/lists.component';
import {AuthGuard} from './guards/auth.guard';
import {MemberDetailComponent} from './members/member-detail/member-detail.component';
import {MemberDetailResolver} from './resolvers/member-detail-resolver';
import {MemberListResolver} from './resolvers/member-list-resolver';
import {MemberEditComponent} from './members/member-edit/member-edit.component';
import {MemberEditResolver} from './resolvers/member-edit-resolver';
import {PreventUnsavedChangesGuard} from './guards/prevent-unsaved-changes.guard';
import {ListsResolver} from './resolvers/lists.resolver';
import {MessagesResolver} from './resolvers/messages.resolver';
import {AdminPanelComponent} from './admin/admin-panel/admin-panel.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}, canActivate: [AuthGuard]},
  {path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}, canActivate: [AuthGuard]},
  {path: 'members/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver},
    canActivate: [AuthGuard], canDeactivate: [PreventUnsavedChangesGuard]},
  {path: 'messages', component: MessagesComponent,  resolve: {users: MessagesResolver}, canActivate: [AuthGuard]},
  {path: 'lists', component: ListsComponent,  resolve: {users: ListsResolver}, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
