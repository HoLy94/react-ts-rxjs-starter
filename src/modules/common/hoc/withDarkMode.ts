import {Dispatch} from 'redux';
import {connect} from 'react-redux';

// Models
import {CommonState} from '../store/reducer';
import {RootState} from '../../../store/root-reducer';

// Actions
import {toggleDarkMode} from '../store/actions';

// Selectors
import {isDarkModeSelector} from '../store/selectors';

const mapStateToProps = (state: RootState) => ({
  isDarkMode: isDarkModeSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleDarkMode: () => dispatch(toggleDarkMode()),
});

const withDarkMode = (BaseComponent: any) =>
  connect(mapStateToProps, mapDispatchToProps)(BaseComponent);

export type WithThemeTypeProps = {
  isDarkMode: CommonState['isDarkMode'];
  toggleDarkMode(): void;
};

export default withDarkMode;
