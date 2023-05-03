import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  animations: [
    trigger('myOtherInsertRemoveTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class TabsPage implements OnInit {

  badgeCount = 3;
  

  constructor(public afAuth: AngularFireAuth) {}

  ngOnInit() {
    window.addEventListener('badgeCount', (e: Event) =>  {
      // @ts-expect-error
      this.badgeCount = e['detail'];
      // this.badge.set(this.tabCount);
    });
  }


}
