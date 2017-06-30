import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { HomeComponent }   from './home.component';
import { AboutComponent }   from './about.component';
import { PageDefault }    from './app.pagedefault';
import { routing }        from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, PageDefault,
        HomeComponent, AboutComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
