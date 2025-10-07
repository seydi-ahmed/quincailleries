import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-gerant',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-gerant-component.html',
  styleUrls: ['./create-gerant-component.scss'],
})
export class CreateGerantComponent {
  form: FormGroup;
  storeId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.storeId = Number(this.route.snapshot.paramMap.get('id'));
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.invalid) return;

    const data = this.form.value;
    this.authService.createGerant(this.storeId, data).subscribe({
      next: () => this.router.navigate(['/stores', this.storeId]),
      error: (err) => console.error(err),
    });
  }
}
