import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})

export class AgeComponent implements OnInit {

  constructor() {};

  ngOnInit(): void {
    
  };

  getUserValue(value:any) {

    let name = value.name;
    let lastname = value.lastname;
    let date = value.date;

    const date1 = new Date();
    const date2 = new Date(date as string);

    const msBetweenDates = date1.getTime() - date2.getTime();

    function msToTime(ms:number) {

      let seconds = (ms / 1000).toFixed(1);
      let minutes = (ms / (1000 * 60)).toFixed(1);
      let hours = (ms / (1000 * 60 * 60)).toFixed(1);
      let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);

      return 'Ciao ' + name + ' ' + lastname + ' fino ad ora hai vissuto in giorni: ' + days + ' Giorni, ' + 'in ore: ' + hours + ' Ore, ' + 'in minuti: ' + minutes + ' Minuti, '

    };

    const boxResponse = document.querySelector('.response-box') as HTMLDivElement;
    const response = msToTime(msBetweenDates);
    const text = document.createTextNode(response);

    boxResponse.appendChild(text);

  };

}
