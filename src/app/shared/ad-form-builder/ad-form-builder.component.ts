import { AfterViewInit, Component, Input, OnChanges, OnInit, Output } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormElementTypes } from '../types/formBuilder';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ad-form-builder',
  standalone: true,
  imports: [ ButtonModule,InputTextModule, AutoCompleteModule, CheckboxModule, InputTextareaModule, InputNumberModule, MultiSelectModule, PasswordModule, RadioButtonModule, ReactiveFormsModule,CommonModule, DropdownModule],
  templateUrl: './ad-form-builder.component.html',
  styleUrl: './ad-form-builder.component.scss'
})
export class AdFormBuilderComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() formBuilderConfiguration: FormElementTypes[] = [];
  @Output()
  handleChange = new EventEmitter();
  dynamicForm = this.fb.group({})
  
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    console.log("init ready")
    this.setDynamicForm(this.formBuilderConfiguration)
  }

  ngAfterViewInit(){
    console.log("View init ready")
    // this.dynamicForm.valueChanges.subscribe(selectedValue  => {
    //   console.log('form value changed')
    //   console.log(selectedValue)
    // })
  }
  
  setDynamicForm(controls: FormElementTypes[]){
    for(const control of controls){
      console.log(control, "jjdd")
      this.dynamicForm.addControl(control.name, this.fb.control(control.key))
    }
  }

  saveFormData(){
    console.log(this.dynamicForm.value)
  }

  ngOnChanges(){
    
  }

  onChange(event:Event, data: FormElementTypes){
    this.handleChange.emit({data, event});
  }
  
}
