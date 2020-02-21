import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {IUser} from 'src/app/models/userModel';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {SelectOption} from 'src/app/models/selectOptionModel';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  form: FormGroup;
  selectOptions = [
    {
      value: 0,
      label: SelectOption.active
    },
    {
      value: 1,
      label: SelectOption.stopped
    },
    {
      value: 2,
      label: SelectOption.blocked
    },
  ];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUser) {
  }

  ngOnInit(): void {
    this.initForm(this.data);
  }

  initForm(user: IUser): void {
    this.form = this.fb.group({
      name: [user.name || '', [
        Validators.required
      ]],
      fname: [user.fname || '', [
        Validators.required
      ]],
      mname: [user.mname || '', [
        Validators.required
      ]],
      status: [user.status, [
        Validators.required
      ]]
    });
  }

  control(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl;
  }

  updateUser(): void {
    const controls = this.form.controls;
    if (this.form.invalid) {
      Object.keys(controls).forEach(controlName => {
        return controls[controlName].markAsTouched();
      });
      return;
    } else {
      this.dialogRef.close(this.form.value);
    }
  }

  changeStatus(id): void {
    this.control('status').setValue(id);
  }

  close(): void {
    this.dialogRef.close();
  }

}
