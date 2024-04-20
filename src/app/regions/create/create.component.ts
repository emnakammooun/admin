import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Regions } from '../regions';
import{FormGroup, FormBuilder}  from "@angular/forms";
import { RegionsService } from '../regions.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 regionForm:FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private regionsService: RegionsService){
      this.regionForm = this.formBuilder.group({
        name:[''],
        image:[''],
        description:[''],
        score:[''],
    })
  }
    
    ngOnInit():void{

    }

 onSubmit():any{
    this.regionsService.addRegion(this.regionForm.value)
    .subscribe(()=>{
      console.log("Region created successfully!");
      window.location.reload();
  })
}

/* onSubmit() {
  if (this.clientForm.valid) {
    const formData = this.clientForm.value;
    this.clientsService.addClient(this.clientForm.value).subscribe(
      response => {
        console.log('Client saved successfully:', response);
        // Optionally, reset the form after successful save
        this.clientForm.reset();
      },
      error => {
        console.error('Error saving client:', error);
      }
    );
  } else {
    console.error('Form is invalid. Cannot submit.');
  }
}*/

  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  regions:Regions=new Regions()
  
  addRegion=()=>{
    this.regionsService.addRegion(this.regions).subscribe((data=>{
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
