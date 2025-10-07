import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { StoreService } from "../services/store";
import { ProductService } from "../services/product";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./dashboard.html",
  styleUrls: ["./dashboard.scss"],
})
export class DashboardComponent implements OnInit {
  stores: any[] = [];
  totalProducts: number = 0;
  isLoading: boolean = true;
  errorMessage: string = "";
  isLoadingProducts: boolean = false;

  constructor(
    private storeService: StoreService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUserData();
    this.productService.productsChanged$.subscribe(() => {
      this.calculateTotalProducts();
    });
  }

  reloadDashboard(): void {
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate(["/dashboard"]);
    });
  }

  loadUserData(): void {
    this.isLoading = true;
    this.storeService.getUserStores().subscribe({
      next: (stores) => {
        this.stores = stores;
        this.calculateTotalProducts();
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      },
    });
  }

  calculateTotalProducts(): void {
    this.totalProducts = 0;
    if (this.stores.length === 0) return;

    // On charge les produits de chaque quincaillerie et on additionne
    this.stores.forEach((store) => {
      this.productService.getStoreProducts(store.id).subscribe({
        next: (products) => {
          this.totalProducts += products.length;
        },
        error: (error) => {
          console.error(
            `Erreur lors du chargement des produits pour le store ${store.id}:`,
            error
          );
        },
      });
    });
  }

  getStoreCount(): number {
    return this.stores.length;
  }

  navigateToStore(storeId: number): void {
    this.router.navigate(["/stores", storeId, "products"]);
  }

  navigateToCreateStore(): void {
    this.router.navigate(["/stores/new"]);
  }
}
