import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.page.html',
  styleUrls: ['./homedetails.page.scss'],
})
export class HomedetailsPage  implements OnInit {

  propertyId: any;
  propertyDetails: any;
  constructor(private houses: HousesService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    console.log(this.route)
    this.propertyId = this.route.snapshot.paramMap.get('id');
    this.houses.searchHouseById(this.propertyId).subscribe(res => {
      
      this.propertyDetails = res;

      console.log(this.propertyDetails)
    })
  }

}
