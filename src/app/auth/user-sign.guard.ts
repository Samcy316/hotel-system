import { CanActivateFn, Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';
import { inject } from '@angular/core';


export const userSignGuard: CanActivateFn = (route, state) => {
  const authService=inject(UserRegistrationService);
  const router = inject(Router)
  if(authService.isLoggedin()){
    return true;
  }else{
    router.navigate(['loggin']);
    return false; 
  }


};
