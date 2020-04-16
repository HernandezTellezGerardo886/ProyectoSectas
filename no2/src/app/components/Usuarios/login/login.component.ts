import { Component, OnInit } from "@angular/core";
import { User } from "../../../models/user";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public user;
  public token;
  public identity;
  public data_error;

  constructor(private _userService: UserService, private _router: Router) {
    this.user = new User("", "", "", "", "", "");
  }

  ngOnInit(): void {}

  login(loginForm) {
    if (loginForm.valid) {
      this._userService.login(this.user).subscribe(
        (response) => {
          console.log(response);
          this.token = response.jwt;
          localStorage.setItem("token", this.token);

          this._userService.login(this.user, true).subscribe((respose) => {
            // console.log(response+"El respose que me devuelve en el local storage");
            localStorage.setItem("identity", JSON.stringify(response.user));
            this._router.navigate(["dashboard"]);
          });
        },
        (error) => {
          console.log(<any>error.error.message);
          this.data_error = error.error.message;
        }
      );
      // console.log(loginForm.value); los datos de login en json
    } else {
    }
  }
}
