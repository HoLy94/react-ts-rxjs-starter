import {Dispatch} from 'redux';
import {connect} from 'react-redux';

// Actions
import {signOutAsync} from '../store/actions';

const mapDispatchToProps = (d: Dispatch) => ({
  signOut: () => d(signOutAsync.request()),
});

const withSignOut = (BaseComponent: any) =>
  connect(null, mapDispatchToProps)(BaseComponent);

export type WithSignOutProps = {
  signOut(): void;
};

export default withSignOut;
