import authService, {AuthService} from '../modules/auth/service';

export type Dependencies = {
  authService: AuthService;
};

export default {
  authService,
};
