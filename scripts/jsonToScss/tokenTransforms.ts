import { Named, Transform } from 'style-dictionary';

import { TransformName, TYPOGRAPHY } from './constants';
import { toKebabCase } from './utils';

// Файл с трансформерами для токенов
// Transform - функция, которая принимает сырой токен и может его преобразовать в какой-либо формат
// https://amzn.github.io/style-dictionary/#/transforms

// Трансформер для токена типа Typography для scss-файлов темы
export const TypographyThemeTransform: Named<Transform> = {
  type: 'value',
  transitive: true,
  name: TransformName.TypographyTheme,
  matcher: ({ type }) => [TYPOGRAPHY].includes(type),
  transformer: ({ value, name }) => {
    if (!value) return;

    const flattendedValue = Object.entries(value).map(([key, v]) => `$${name}-${toKebabCase(key)}: ${v},`, '\n');

    return `// ${name}
  ${flattendedValue.join('\n  ')}`;
  },
};

// Трансформер для токена типа Typography для scss-файла компонента
export const TypographyComponentsTransform: Named<Transform> = {
  type: 'value',
  transitive: true,
  name: TransformName.TypographyComponents,
  matcher: ({ type }) => [TYPOGRAPHY].includes(type),
  transformer: ({ value, name, isSource }) => {
    if (!value) return;

    if (isSource) {
      return value;
    }

    const newEntries = Object.entries(value).map(([key]) => [key, `$${name}-${toKebabCase(key)}`]);

    return Object.fromEntries(newEntries);
  },
};
