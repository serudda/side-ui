import type colors from 'tailwindcss/colors';

/**
 * Get the default and extended colors from the Tailwind config
 */
type defaultColors = keyof typeof colors;

/**
 * Exclude shades of certain colors
 */
type ExcludeShades<T extends string> = T extends
  | 'black'
  | 'white'
  | 'current'
  | 'inherit'
  | 'transparent'
  ? T
  : `${T}-${TailwindColorShade}`;

/**
 * Define the available shades for a Tailwind color
 */
// TODO: Find a way to get the actual shade of every color
type TailwindColorShade =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';

/**
 * Get the available Tailwind colors and
 * generate a string type for each color with the available shades
 */
type TailwindColor = Exclude<defaultColors, 'theme' | 'presets' | 'content'>;
export type TailwindColorString = `${ExcludeShades<TailwindColor>}`;
