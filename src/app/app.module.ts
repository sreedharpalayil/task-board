import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { StickyBoxComponent } from './components/sticky-box/sticky-box.component';
import { ActionsBoxComponent } from './components/actions-box/actions-box.component';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, StickyBoxComponent, ActionsBoxComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
