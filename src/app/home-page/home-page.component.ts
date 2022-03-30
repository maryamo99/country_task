import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  API= 'https://restcountries.com/v2/all';

  filters:string[]=["All","Africa","Americas","Europe","Asia"]
  countriesData: any;
  currentRegionFilter: string="All";
  currentSearchName="";

  public returnCurrentValue(){
    console.log("This Is Current Region")
    console.log(this.currentRegionFilter)

  }
  public async getCountries () {
    this.countriesData = await fetch(this.API).then((r:Response) => (r.json())
    );
    console.log(this.countriesData)
  }

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
    this.getCountries();
  }

}
