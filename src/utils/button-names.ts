export const buttonNameHandler = (mobile: string, desktop: string) => {
  if (window.innerWidth >= 768) {
    return desktop;
  }

  return mobile;
};
