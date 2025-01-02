// country context
export type SingleCountryContext = {
  altSpellings: string[];
  area: number;
  borders?: string[]
  capital: string[];
  capitalInfo: {
    latlng: number[];
  };
  car: {
    side: string;
    signs: string[];
  };
  cca2: string;
  cca3: string;
  ccn3: string;
  continents: string[];
  currencies: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  demonyms: { eng: { f: string; m: string } };
  fifa: string;
  flag: string;
  flags: {
    svg: string;
    png: string;
    alt: string;
  };
  languages: {
    [code: string]: {
      name: string;
    };
  };
  latlng: number[];
  name: { official: string; common: string };
  maps: {
    google: string;
    openstreetmap: string;
  };
  population: number;
  region: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  unMember: boolean;
};

// theme
export enum ThemeChange {
  dark = "dark",
  light = "light",
  system = "system"
}
