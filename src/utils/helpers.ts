export const getQueryParams = (obj: object) => {
  return '?' + new URLSearchParams(obj as Record<string, string>);
};
