import { theme } from './theme';

interface LogProps {
  title: string;
  titleBg?: string;
  titleColor?: string;
  text: string;
  textBg?: string;
  textColor?: string;
}

export const log = (config: LogProps) => {
  const { title, titleBg, titleColor, text, textBg, textColor } = config;
  console.log(
    `%c${ title }%c: %c${ text }`,
    `${ titleBg ? 'background:' + titleBg + ';' : '' }
    ${ titleColor ? 'color:' + theme(titleColor) + ';' : 'color:' + theme('') + ';' }`,
    '',
    `${ textBg ? 'background:' + textBg + ';' : '' }
    ${ textColor ? 'color:' + textColor + ';' : '' }`
  );
};

export default log;
