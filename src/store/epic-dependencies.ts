import authService, {AuthService} from '../modules/auth/service';

export type EpicDependencies = {
  authService: AuthService;
};

export default {
  authService,
};
