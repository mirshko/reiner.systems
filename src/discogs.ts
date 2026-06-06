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
  date_added: Date;
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

export enum Join {
  Empty = "",
  Featuring = "Featuring",
  Fluffy = "+",
  Join = ",",
  Purple = "/",
  Tentacled = "&",
  VS = "v's",
  Versus = "Versus",
  Vs = "vs",
}

export interface Format {
  name: Name;
  qty: string;
  text?: string;
  descriptions: string[];
}

export enum Name {
  BoxSet = "Box Set",
  CD = "CD",
  Vinyl = "Vinyl",
}

export enum Genre {
  Classical = "Classical",
  Electronic = "Electronic",
  FunkSoul = "Funk / Soul",
  HipHop = "Hip Hop",
  Jazz = "Jazz",
  Pop = "Pop",
  Reggae = "Reggae",
  Rock = "Rock",
  StageScreen = "Stage & Screen",
}

export interface Label {
  name: string;
  catno: string;
  entity_type: string;
  entity_type_name: EntityTypeName;
  id: number;
  resource_url: string;
}

export enum EntityTypeName {
  Label = "Label",
}
