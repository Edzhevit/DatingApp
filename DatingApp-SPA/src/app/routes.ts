import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MemberListComponent} from './members/member-list/member-list.component';
import {MessagesComponent} from './messages/messages.component';
import {ListsComponent} from './lists/lists.component';
import {AuthGuard} from './guards/auth.guard';
import {MemberDetailComponent} from './members/member-detail/member-detail.component';
import {MemberDetailResolver} from './resolvers/member-detail-resolver';
import {MemberListResolver} from './resolvers/member-list-resolver';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'members', resolve: {users: MemberListResolver}, component: MemberListComponent, canActivate: [AuthGuard]},
  {path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}, canActivate: [AuthGuard]},
  {path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
  {path: 'lists', component: ListsComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
