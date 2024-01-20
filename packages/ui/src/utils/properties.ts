interface FontOptions {
  weight?: string;
  size: string;
  lineHeight?: number;
  family: string;
}
export const font = (options: FontOptions) => {
  const components: string[] = [
    options.lineHeight === undefined ? options.size : `${options.size}/${options.lineHeight}`,
    options.family,
  ];
}
