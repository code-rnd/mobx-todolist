export const cn = <T>(list: T[]): string => {
  return list.filter(Boolean).join(" ");
};
