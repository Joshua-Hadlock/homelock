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
  constructor(private houses: HousesService, private route: ActivatedRoute, private _router: Router) {
    
  }
  
  goBack() {
    this._router.navigate(['tabs/browse'])
  }

  ngOnInit() {
    
    this.propertyId = this.route.snapshot.paramMap.get('id');
    this.houses.searchHouseById(this.propertyId).subscribe(res => {
      
      this.propertyDetails = res;

      console.log(this.propertyDetails)
    })
  }


}
