import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.page.html',
  styleUrls: ['./homedetails.page.scss'],
})
export class HomedetailsPage  implements OnInit {
  propertyId: any;
  propertyDetails: any;
  houseNumber = Math.floor(Math.random() * 4);
  constructor(private houses: HousesService, private route: ActivatedRoute, private _router: Router) {
    
  }
  
  goBack() {
    console.log('i ran')
    this._router.navigateByUrl('/tabs/tab2')
  }

  ngOnInit() {
    
    console.log("houseNumber is " + this.houseNumber);

    console.log(this.route)
    this.propertyId = this.route.snapshot.paramMap.get('id');
    this.houses.searchHouseById(this.propertyId).subscribe(res => {
      
      this.propertyDetails = res;

      console.log(this.propertyDetails)
    })
  }


}
