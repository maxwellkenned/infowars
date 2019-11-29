import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-button-to-top',
  templateUrl: './button-to-top.component.html',
  styleUrls: ['./button-to-top.component.scss']
})
export class ButtonToTopComponent implements OnInit {
  btnTop: boolean;
  constructor() { }

  ngOnInit() {
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const pos = document.documentElement.scrollTop;

    if (pos > (window.screen.availHeight / 2)) {
      this.btnTop = true;
      return;
    }

    this.btnTop = false;
  }

  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
}
