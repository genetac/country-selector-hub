export interface Country {
  code: string;
  name: string;
  flag: string;
  flagUrl: string;
}

export const countries: Country[] = [
  { code: 'US', name: 'United States', flag: '🇺🇸', flagUrl: 'https://flagcdn.com/w80/us.png' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', flagUrl: 'https://flagcdn.com/w80/gb.png' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', flagUrl: 'https://flagcdn.com/w80/ca.png' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', flagUrl: 'https://flagcdn.com/w80/au.png' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', flagUrl: 'https://flagcdn.com/w80/de.png' },
  { code: 'FR', name: 'France', flag: '🇫🇷', flagUrl: 'https://flagcdn.com/w80/fr.png' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹', flagUrl: 'https://flagcdn.com/w80/it.png' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸', flagUrl: 'https://flagcdn.com/w80/es.png' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', flagUrl: 'https://flagcdn.com/w80/jp.png' },
  { code: 'CN', name: 'China', flag: '🇨🇳', flagUrl: 'https://flagcdn.com/w80/cn.png' },
  { code: 'IN', name: 'India', flag: '🇮🇳', flagUrl: 'https://flagcdn.com/w80/in.png' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', flagUrl: 'https://flagcdn.com/w80/br.png' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽', flagUrl: 'https://flagcdn.com/w80/mx.png' },
  { code: 'RU', name: 'Russia', flag: '🇷🇺', flagUrl: 'https://flagcdn.com/w80/ru.png' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷', flagUrl: 'https://flagcdn.com/w80/kr.png' },
];