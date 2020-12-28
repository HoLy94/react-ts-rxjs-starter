import httpService, {
  HttpServiceType,
} from '../modules/common/services/httpService';
import localStorageService, {
  LocalStorageServiceType,
} from '../modules/common/services/localStorageService';
import authService, {AuthServiceType} from '../modules/auth/authService';
import signUpService, {
  SignUpServiceType,
} from '../modules/auth/sign-up/signUpService';
import signInService, {
  SignInServiceType,
} from '../modules/auth/sign-in/signInService';

export type Dependencies = {
  httpService: HttpServiceType;
  localStorageService: LocalStorageServiceType;
  authService: AuthServiceType;
  signUpService: SignUpServiceType;
  signInService: SignInServiceType;
};

export default {
  httpService,
  localStorageService,
  authService,
  signUpService,
  signInService,
};
