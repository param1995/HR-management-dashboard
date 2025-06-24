import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HrManagementComponent } from './pages/hr-management/hr-management.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { StatusComponent } from './pages/status/status.component';
import { SettingComponent } from './pages/setting/setting.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'dashboard',
        component: DashboardComponent,
        title:'Dashboard'
      },
      {
        path:'Hr-employees',
        component:HrManagementComponent,
        title: 'hr-managementComponent'
      },
      {
        path:'create-post',
        component:CreatePostComponent,
        title: 'create-post'
      },
      {
        path:'status',
        component:StatusComponent,
        
      },
      {
        path:'setting',
        component:SettingComponent,
        
      },
      {
        path:'profile',
        component:ProfileComponent,
        
      },
      {
        path:'header',
        component:HeaderComponent,
        
      },
      {
        path:'footer',
        component:FooterComponent,
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
