import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';
import { FormsModule} from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    RepoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
