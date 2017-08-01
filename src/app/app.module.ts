import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DataRenderComponent } from './components/data-render/data-render.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgeditorComponent } from './components/ngeditor/ngeditor.component';
import { QuillEditorComponent } from './components/quill-editor/quill-editor.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DataRenderComponent,
    NgeditorComponent,
    QuillEditorComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule,
    QuillModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
