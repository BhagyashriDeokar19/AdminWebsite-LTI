import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteAdminComponent } from './website-admin/website-admin.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { LoginComponent} from './login/login.component';

const routes: Routes = [ {
  path:'', redirectTo:'',pathMatch:'full'
},
{
  path:'Login', component:LoginComponent
}
/*,
{
  path:'AdminLink', component:WebsiteAdminComponent
},
{
  path:'HelpDeskLink', component: HelpDeskComponent
}
,{
  path:'Login', component:LoginComponent
}*/];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
