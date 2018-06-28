// @flow
import * as React from 'react';
import type { ButtonProps } from 'ui/Button/types';
import type { TextProps } from 'ui/Text/types';
import type { ViewProps } from 'ui/View/types';
import type { ImageProps } from 'ui/Image/types';

export type DummyProps = {
  Button: React.ComponentType<ButtonProps>,
  Text: React.ComponentType<TextProps>,
  View: React.ComponentType<ViewProps>,
  Image: React.ComponentType<ImageProps>,
  dummyField: string,
};
