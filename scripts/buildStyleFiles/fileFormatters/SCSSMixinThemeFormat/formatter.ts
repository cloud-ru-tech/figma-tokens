import { Dictionary } from 'style-dictionary';
import { FormatterArguments } from 'style-dictionary/types/Format';

import { COMPOSITE_TOKENS } from '../../constants';

function getTokenValues(dictionary: Dictionary) {
  return dictionary.allTokens
    .map(token => {
      if (COMPOSITE_TOKENS.includes(token.type)) {
        return token.value;
      }

      return `--${token.name}: ${token.value};`;
    })
    .join('\n  ');
}

export function formatter({ dictionary, options }: FormatterArguments) {
  const tokenValues = getTokenValues(dictionary);

  return `@mixin ${options.theme}ThemeMode {
  ${tokenValues}
}
`;
}
