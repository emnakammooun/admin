import { Component, OnInit} from '@angular/core';
import { HotelsService } from '../hotels.service';
import { Hotels } from '../hotels';
import { EditComponent } from '../edit/edit.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  hotels: Hotels[];
  columns: string[] = ['name','description','image','contact_email','city','contact_phone','promotion','review','price'];

  constructor(public hotelsService: HotelsService,private dialog: MatDialog) { }
  ngOnInit(): void {
    this.hotelsService.getHotels().subscribe(
      (data: any) => {
        // Assuming 'data' is the API response containing client data
        this.hotels = data as Hotels[]; // Assigning response to clients array
      },
      (error) => {
        console.error('Error fetching hotels:', error);
      }
    );
  }
  
  deleteHotel(id: object): void {
      // Show confirmation dialog before deleting
      if (confirm('Are you sure you want to delete this client ?')) {
        // Call service method to delete beneficiary
        this.hotelsService.deleteHotel(id).subscribe(
          () => {
            console.log('formation deleted successfully');
            // Refresh beneficiary list after deletion
            this.hotelsService.getHotels();
          })
      };
    }

    onedit(id: string, data:Hotels) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      this.hotelsService.updateHotel(id,data).subscribe((r) => {
        dialogConfig.data = r;
        this.dialog.open(EditComponent, dialogConfig);
      });
    }
}
