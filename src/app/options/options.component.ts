import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setTheme(theme: string) {
     window['switchTheme'](theme);
    localStorage.setItem('One-Theme-Style', theme); // same key as in 'load-style.js'
  }
  resetTheme(){
    localStorage.removeItem('One-Theme-Style');
    window['switchTheme'](null);
  }

}
