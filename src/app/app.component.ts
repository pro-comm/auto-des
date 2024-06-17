import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { FormElementTypes } from './shared/types/formBuilder';
import { AdFormBuilderComponent } from './shared/ad-form-builder/ad-form-builder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdFormBuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'aut-desk';

  formFields: FormElementTypes[] = []
  constructor(private appService: AppService){

  }
  ngOnInit(): void {
    this.getTheFormFieldsData()
  }

  getTheFormFieldsData(){
    this.appService.getFormData().subscribe((resp: any)=>{
      console.log(resp.data[0].components[0].parameters, "hdfhdhf")
        this.formFields = resp.data[0].components[0].parameters;
    })
  }
}
