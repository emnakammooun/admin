import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
import { HotelsService } from '../hotels.service';
import { Hotels } from '../hotels';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit
  { hotelForm: FormGroup;

    constructor(
      public formBuilder:FormBuilder,
      private router:Router,
      private HotelsService: HotelsService){
        this.hotelForm = this.formBuilder.group({
          name:[''],
          description:[''],
          image:[''],
          contact_email:[''],    
          city:[''],
          contact_phone:[''],
          promotion:[''],
          review: [''],
          price:['']
      })
    }

ngOnInit():void{
}

onSubmit():any{
this.HotelsService.addHotel(this.hotelForm.value)
.subscribe(()=>{
  console.log("Hotel created successfully!");
  window.location.reload();
})
}
@ViewChild('myModal') myModal!: ElementRef;
display = "none";
hotels:Hotels=new Hotels()

addHotel=()=>{
  this.HotelsService.addHotel(this.hotels).subscribe((data=>{
  console.log(data)
  this.closeModal()
  window.location.reload();
  }))
  }

  openModal() {
  this.display = "block";
  }

  closeModal() {
  this.display = "none";

  }
  
}
