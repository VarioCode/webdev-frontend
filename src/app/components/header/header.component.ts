import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showHamburgerMenu: boolean = false;
  selectedItem: string = 'home';

  constructor(private router: Router) {}

  onHamburgerClick() {
    this.showHamburgerMenu = !this.showHamburgerMenu;
  }

  onNavItemClick(itemName: string) {
    this.router.navigate([itemName, itemName]);
    this.selectedItem = itemName;
  }
}
