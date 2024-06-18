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
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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

  @Output()
  handleSubmit = new EventEmitter();

  dynamicForm = this.fb.group({})
  
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.setDynamicForm(this.formBuilderConfiguration)
  }

  ngAfterViewInit(){
    console.log("dynamicForm", this.dynamicForm )
  }
  
  setDynamicForm(controls: FormElementTypes[]){
    for(const control of controls){
      const validators = [];
      if(control?.validators?.required){
        validators.push(Validators.required)
      }
      if(control?.validators?.min_length){
        validators.push(Validators.minLength(control.validators.min_length))
      }
      if(control?.validators?.max_length){
        validators.push(Validators.minLength(control.validators.max_length))
      }
      if(control?.validators?.max){
        validators.push(Validators.max(control.validators.max))
      }
      if(control?.validators?.min){
        validators.push(Validators.max(control.validators.min))
      }
      if(control?.validators?.email){
        validators.push(Validators.email)
      }
      if(control?.validators?.pattern){
        validators.push(Validators.pattern(control.validators.pattern))
      }
      this.dynamicForm.addControl(control.name, this.fb.control(null, validators))
    }
  }

  saveFormData(){
    this.handleSubmit.emit(this.dynamicForm.value)
  }

  // resetFormData(){
  //   if(!this.formBuilderConfiguration.length) return
  //   for(const control of this.formBuilderConfiguration){
  //     this.dynamicForm.get(control.name)?.patchValue(null);
  //   }
  // }

  ngOnChanges(){
    //Danger do not remove
    //This is required to enable the change event
  }

  onChange(event:Event, data: FormElementTypes){
    this.handleChange.emit({data, event});
  }

  renderForm(): boolean {
    return Object.keys(this.dynamicForm.controls).length === this.formBuilderConfiguration.length;
  }
  
}
