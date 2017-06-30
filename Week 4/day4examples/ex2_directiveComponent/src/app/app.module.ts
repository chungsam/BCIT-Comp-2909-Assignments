import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NewDirective }  from './newDirective';
import { ThirdDirective }  from './thirdDirective';
import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NewDirective, ThirdDirective  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
