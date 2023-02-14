export const PLATFORM = 'web';
export const BASE = 'base';
export const BASE_VARIABLES = 'base-variables';
export const THEME_VARIABLES = 'theme-variables';
export const COMPOSITION = 'composition';
export const BASE_INDENT = '  ';

export enum CompositeToken {
  Border = 'border',
  Typography = 'typography',
}

export const COMPOSITE_TOKENS = Object.values(CompositeToken);

export enum FormatName {
  SCSSBase = 'scss/base',
  SCSSBaseVariables = 'scss/base-variables',
  SCSSTheme = 'scss/theme',
  SCSSThemeVariables = 'scss/theme-variables',
  SCSSComponent = 'scss/component',
  TSBaseVariables = 'ts/base-variables',
  TSThemeVariables = 'ts/theme-variables',
}

export enum TransformName {
  Theme = 'theme',
  Components = 'components',
}

export enum FilterName {
  SourceTokens = 'source-tokens',
}

export enum ValueFormat {
  Original = 'Original',
  CSSVar = 'CSSVar',
}