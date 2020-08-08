import {Dispatch} from 'redux';
import {connect} from 'react-redux';

// Models
import {AuthState} from '../store/reducer';
import {SignInCredentials} from '../models';
import {RootState} from '../../../store/root-reducer';

// Actions
import {signInAsync} from '../store/actions';

// Selectors
import {selectSigningIn} from '../store/selectors';

const mapStateToProps = (state: RootState) => ({
  signingIn: selectSigningIn(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signIn: (credentials: SignInCredentials) =>
    dispatch(signInAsync.request(credentials)),
});

const withSignIn = (BaseComponent: any) =>
  connect(mapStateToProps, mapDispatchToProps)(BaseComponent);

export type WithSignInProps = {
  signingIn: AuthState['signingIn'];
  signIn(credentials: SignInCredentials): void;
};

export default withSignIn;
