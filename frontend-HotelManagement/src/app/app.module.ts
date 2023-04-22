import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { RouterModule } from '@angular/router';
import {FormGroup, FormControl,FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { NewComponent } from './booking/new/new.component';
import { UpdateComponent } from './booking/update/update.component';
import { AboutComponent } from './about/about.component';
import { DeleteComponent } from './booking/delete/delete.component';
import { StaffDetails } from './app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/material.module';
import { UserlistComponent } from './userlist/userlist.component';
import { AdminComponent } from './admin/admin.component';
import { BookComponent } from './book/book.component';
import { StaffadminComponent } from './staffadmin/staffadmin.component';
import { BookingadminComponent } from './bookingadmin/bookingadmin.component';
import { HoteladminComponent } from './hoteladmin/hoteladmin.component';
import { AddhotelComponent } from './hoteladmin/addhotel/addhotel.component';
import { EdithotelComponent } from './hoteladmin/edithotel/edithotel.component';
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    StaffDetailsComponent,
    NewComponent,
    UpdateComponent,
    DeleteComponent,
    RegisterComponent,
    LoginComponent,
    UserlistComponent,
    AdminComponent,
    BookComponent,
    StaffadminComponent,
    BookingadminComponent,
    HoteladminComponent,
    AddhotelComponent,
    EdithotelComponent,
    AboutComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"", component: LoginComponent},
      {path:"home", component: AppComponent},
      {path:"register", component: RegisterComponent},
      {path:"login", component: LoginComponent},
      {path: 'booking', component: BookingComponent},
      {path: 'staff', component: StaffDetailsComponent},
      {path: 'booking/new', component: NewComponent},
      {path: 'booking/update', component: UpdateComponent},
      {path: 'about', component: AboutComponent},
      {path: 'booking/delete', component: DeleteComponent},    
      {path: 'admin', component: AdminComponent},    
      {path: 'bookingadmin', component: BookingadminComponent},    
      {path: 'staffadmin', component: StaffadminComponent},   
      {path: 'hoteladmin', component: HoteladminComponent},
      {path: 'hoteladmin/edithotel', component: EdithotelComponent}
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
