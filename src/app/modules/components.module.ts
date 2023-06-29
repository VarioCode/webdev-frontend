import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { WelcomeComponent } from '../components/portfolio/welcome.component';
import { SkillComponent } from '../components/portfolio/skill.component';
import { CookiebannerComponent } from '../components/cookiebanner/cookiebanner.component';
import { ContactComponent } from '../components/portfolio/contact.component';
import { CheckoutComponent } from '../pages/checkout/checkout.component';
import { CartComponent } from '../components/shop/cart.component';
import { PaymentComponent } from '../components/shop/payment.component';
import { ProductComponent } from '../components/shop/product.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    WelcomeComponent,
    SkillComponent,
    CookiebannerComponent,
    ContactComponent,
    CheckoutComponent,
    CartComponent,
    PaymentComponent,
    ProductComponent,
  ],
  exports: [
    HeaderComponent,
    WelcomeComponent,
    SkillComponent,
    CookiebannerComponent,
    ContactComponent,
    CheckoutComponent,
    CartComponent,
    PaymentComponent,
    ProductComponent,
  ],
  imports: [CommonModule, RouterLink],
})
export class ComponentsModule {}
