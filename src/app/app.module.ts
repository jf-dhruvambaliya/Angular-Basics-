import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckComponent } from './check/check.component';
import { StudentListComponent } from './student-list/student-list.component';
import {UserAuthModule} from "./user-auth/user-auth.module"
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms"
import { ChildComponent } from './child/child.component';
import { ReuseChildComponent } from './reuse-child/reuse-child.component';
import { ChildtoParentComponent } from './childto-parent/childto-parent.component';
import { InrtoUsdPipe } from './inrto-usd.pipe';
import { RedeleDirective } from './reddirect/redele.directive';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { SinglePersonComponent } from './single-person/single-person.component';
@NgModule({
  declarations: [
    AppComponent,
    CheckComponent,
    StudentListComponent,
    ChildComponent,
    ReuseChildComponent,
    ChildtoParentComponent,
    InrtoUsdPipe,
    RedeleDirective,
    UserComponent,
    AboutComponent,
    SinglePersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
