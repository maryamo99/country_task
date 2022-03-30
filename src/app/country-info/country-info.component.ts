import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {
  

  constructor(private activatedRoute: ActivatedRoute , private location: Location, public themeService: ThemeService) { }
  selectedCountry: any;
  API="https://restcountries.com"
  countryData:any;
  countryBorderData:any;

  public async getCountry () {
    this.countryData = await fetch(this.API + "/v2/name/" + this.selectedCountry).then((r) => 
      r.json()
    );
    console.log(this.countryData)
    this.countryBorderData = await fetch(this.API + "/v2/alpha?codes=" + this.countryData[0].borders.join(',')).then((r) => (r.json()));
    console.log(this.countryBorderData)
  }

  public goBack(){
    this.location.back();
  }

  public borders(){
    this.borders;
  }


  ngOnInit(): void {
    this.getCountry()
    this.activatedRoute.params.subscribe( params => 
      {
         this.selectedCountry = params["countryName"];
         this.getCountry()
      });
  }

}
