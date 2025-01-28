import { en } from '../locales/en';

export const useTranslation = () => {
  // For now, we'll just return English translations
  // In the future, this could be expanded to support multiple languages
  return {
    t: en,
  };
};
