import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DataRenderComponent } from './components/data-render/data-render.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgeditorComponent } from './components/ngeditor/ngeditor.component';
import { QuillComponent } from './components/quill/quill.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DataRenderComponent,
    NgeditorComponent,
    QuillComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
