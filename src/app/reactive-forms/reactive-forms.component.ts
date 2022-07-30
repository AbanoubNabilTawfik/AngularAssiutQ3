import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidators } from '../CustomValidators/ConfirmPasswordValidator';
import { ForbiddenNameValidator } from '../CustomValidators/ForbiddenNameValidator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  // registerationForm= new FormGroup({
  //   userName:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //      state:new FormControl(''),
  //      city: new FormControl(''),
  //      postalCode: new FormControl('')
  //   })
  // })

  registerationForm= this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator(/shipper/)]],
    password:[''],
    confirmPassword:[''],
    email:[''],
    subscribe:[false],
    alternativeEmails:this.fb.array([]),
    address:this.fb.group({
       state:[''],
       city:[''],
       postalCode:['']
    })
  },{validator:[ConfirmPasswordValidators]})

  get alternativeEmails()
  {
    return this.registerationForm.get('alternativeEmails') as FormArray;
  }

  addAlternativeEmail()
  {
    this.alternativeEmails.push(this.fb.control(''))
  }

  removeEmail(i:any)
  {
    this.alternativeEmails.removeAt(i);
  }
  
  get UserName()
  {
    return this.registerationForm.get('userName')
  }

  get Email()
  {
    return this.registerationForm.get('email')
  }

  ngOnInit(): void {
    console.log(this.registerationForm)
  }

  loadData()
  {
    // this.registerationForm.setValue({
    //   userName:'ITI',
    //   password:'123',
    //   confirmPassword:'123',
    //   address:{
    //     city:'Assiut',
    //     state:'Egypt',
    //     postalCode:'71111'
    //   }
    // })

    this.registerationForm.patchValue({
      userName:'ITI',
      address:{
        city:'Assiut',
        state:'Egypt',
        postalCode:'71111'
      }
    })
  }

  setEmailValidators()
  {
    //if the checkbox is marked then the email become required
    //if the checkbox is not marked the email become optional
    this.registerationForm.get('subscribe')?.valueChanges
    .subscribe(checkedValue=>{
      if(checkedValue)
      {
        this.Email?.setValidators(Validators.required);
      }
      else
      {
        this.Email?.clearValidators();
      }
      this.Email?.updateValueAndValidity();
    })
  }

}
