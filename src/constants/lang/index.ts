const LANG = {};

const LANG_OPTIONS = ['pt', 'en'] as const;
type LangOptions = typeof LANG_OPTIONS[number];

export type { LangOptions };
export default LANG;