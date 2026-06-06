export interface UserCollection {
  pagination: Pagination;
  releases: Release[];
}

export interface Pagination {
  page: number;
  pages: number;
  per_page: number;
  items: number;
  urls: Urls;
}

export interface Urls {}

export interface Release {
  id: number;
  instance_id: number;
  date_added: string;
  rating: number;
  basic_information: BasicInformation;
}

export interface BasicInformation {
  id: number;
  master_id: number;
  master_url: null | string;
  resource_url: string;
  thumb: string;
  cover_image: string;
  title: string;
  year: number;
  formats: Format[];
  labels: Label[];
  artists: Artist[];
  genres: Genre[];
  styles: string[];
}

export interface Artist {
  name: string;
  anv: string;
  join: Join;
  role: string;
  tracks: string;
  id: number;
  resource_url: string;
}

export type Join =
  | ""
  | "Featuring"
  | "+"
  | ","
  | "/"
  | "&"
  | "v's"
  | "Versus"
  | "vs";

export interface Format {
  name: Name;
  qty: string;
  text?: string;
  descriptions: string[];
}

export type Name = "Box Set" | "CD" | "Vinyl";

export type Genre =
  | "Classical"
  | "Electronic"
  | "Funk / Soul"
  | "Hip Hop"
  | "Jazz"
  | "Pop"
  | "Reggae"
  | "Rock"
  | "Stage & Screen";

export interface Label {
  name: string;
  catno: string;
  entity_type: string;
  entity_type_name: "Label";
  id: number;
  resource_url: string;
}

export interface VinylRecord {
  title: string;
  artist: string;
  cover_image: string;
  file_name: string;
  resource_id: number;
  date_added: string;
  video_id: string | null;
  year: number;
}

export type VideoIdMap = Record<string, string | null>;
