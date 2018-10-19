import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeadingComponent } from './heading/heading.component';
import { CenterComponent } from './center/center.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ItemService } from './services/item.service';
import { StoreComponent } from './store/store.component';
import { CentertwoComponent } from './centertwo/centertwo.component';
import { TableComponent } from './table/table.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
    {path :'login', component: CentertwoComponent},
    {path:'',redirectTo:"/login", pathMatch:"full"},
    {path:'store', component: StoreComponent},
    {path : 'cart',component: CartComponent},
    {path :'tablecafe',component: TableComponent},
    {path :'reg',component: RegisterComponent}

  ])
  
   ],
  declarations: [ AppComponent, HelloComponent, HeadingComponent, CenterComponent, FooterComponent, CartComponent, StoreComponent, CentertwoComponent, TableComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ItemService]
})
export class AppModule { }
