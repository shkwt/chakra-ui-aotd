/**
 * date-format that provides two function.
 * 1. date format
 * 2. replace format with date
 */

const formatStr = ["Y", "M", "D"];

export const replaceFormat = (dirtyDate: Date, dirtyFormat: string) => {
  const date = new Date(dirtyDate);
  let format = dirtyFormat;
  const formatStrCounts = formatStr.map(
    (str) =>
      format.substring(format.indexOf(str), format.lastIndexOf(str) + 1).length,
  );

  const getDate = (str: string) => {
    switch (str) {
      case "Y":
        return date.getFullYear();
      case "M":
        return date.getMonth();
      case "D":
        return date.getDate();
    }
  };

  formatStr.forEach((str, i) => {
    const reg = new RegExp(str + "+", "g");
    format = format.replace(
      reg,
      String(getDate(str))
        .padStart(formatStrCounts[i], "0")
        .slice(-formatStrCounts[i]),
    );
  });

  return format;
};
