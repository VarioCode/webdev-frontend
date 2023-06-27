import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../pages/home/home.component';
import { ShopComponent } from '../pages/shop/shop.component';
import { AdminpanelComponent } from '../pages/adminpanel/adminpanel.component';
import { ProductPageComponent } from '../pages/product-page/product-page.component';

@NgModule({
  declarations: [HomeComponent, ShopComponent, AdminpanelComponent, ProductPageComponent],
  exports: [HomeComponent, ShopComponent, AdminpanelComponent, ProductPageComponent],
  imports: [CommonModule],
})
export class PagesModule {}
