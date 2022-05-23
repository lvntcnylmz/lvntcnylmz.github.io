import { Component, OnInit } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  rxTime = new Date();
  subscription: Subscription;

  constructor() {
  }

  ngOnInit(): void {
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        let day = this.rxTime.getDay();
        let month = this.rxTime.getDay();
        let year = this.rxTime.getFullYear(); 
        let hour = this.rxTime.getHours();
        let minuts = this.rxTime.getMinutes();
        let seconds = this.rxTime.getSeconds();
        //let a = time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
        let newTime = day + "/" + month + "/" + year + " - " + hour + ":" + minuts + ":" + seconds
        console.log(newTime);
        this.rxTime = time;
      });
  }

}
