import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {CatalogPageComponent} from "./pages/catalog-page/catalog-page.component";
import {ProductTabAboutComponent} from "./components/product-tab-about/product-tab-about.component";
import {ProductTabReviewsComponent} from "./components/product-tab-reviews/product-tab-reviews.component";

const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "catalog/:categoryId", component: CatalogPageComponent},
  {path: "product/:productId", component: ProductPageComponent},
  // {path: "product/reviews", component: ProductTabReviewsComponent},
  // {path: "product/about", component: ProductTabAboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
