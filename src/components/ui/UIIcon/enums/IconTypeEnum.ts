export const IconTypeEnum = {
  Crown: "Crown",
  GoTo: "GoTo",
  ICreo: "ICreo",
  LangRu: "LangRu",
  LangUa: "LangUa",
  LangEn: "LangEn",
  Mail: "Mail",
  Search: "Search",
  Telegram: "Telegram",
  Arrow:'Arrow',
  UpPage:'UpPage'
} as const;

export type IconTypeEnum = (typeof IconTypeEnum)[keyof typeof IconTypeEnum];
