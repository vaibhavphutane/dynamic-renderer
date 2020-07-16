import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DynamicRendererComponent } from './components/dynamic-renderer/dynamic-renderer.component';
import { TableComponent } from './components/table/table.component';
import { MyInputComponent } from './components/my-input/my-input.component';
import { TypePipe } from './pipes/type.pipe';
import { IsDatePipe } from './pipes/is-date.pipe';
import { ToReadablePipe } from './pipes/to-readable.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DynamicRendererComponent,
    TableComponent,
    TypePipe,
    IsDatePipe,
    MyInputComponent,
    ToReadablePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
