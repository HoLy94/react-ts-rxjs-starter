import React from 'react';

import Authorized from './Authorized';
import UnAuthorized from './UnAuthorized';

export const AuthorizedRoute = React.memo(Authorized);
export const UnAuthorizedRoute = React.memo(UnAuthorized);
