import React from 'react';
import { DesktopHeader } from './desktop';
import { MobileHeader } from './mobile';
import { ViewProps } from './model';

export const View = (props: ViewProps) => (props.isMobile ? <MobileHeader {...props} /> : <DesktopHeader {...props} />);
