import {Dispatch} from 'redux';
import {connect} from 'react-redux';

// Models
import {AuthState} from '../store/reducer';
import {SignUpCredentials} from '../models';
import {RootState} from '../../../store/root-reducer';

// Actions
import {signUpAsync} from '../store/actions';

// Selectors
import {selectSigningUp} from '../store/selectors';

const mapStateToProps = (state: RootState) => ({
  signingUp: selectSigningUp(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signUp: (credentials: SignUpCredentials) =>
    dispatch(signUpAsync.request(credentials)),
});

const withSignUp = (BaseComponent: any) =>
  connect(mapStateToProps, mapDispatchToProps)(BaseComponent);

export type WithSignUpProps = {
  signingUp: AuthState['signingUp'];
  signUp(credentials: SignUpCredentials): void;
};

export default withSignUp;
