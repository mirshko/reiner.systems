export interface RecordInterface {
  artist: string;
  cover_image: string;
  date_added: string;
  file_name: string;
  resource_id: number;
  title: string;
  video_id: null | string;
  year: number;
}

/**
 * @note Incomplete Typedef
 */
export interface ReleaseInterface {
  date_added: string;
  id: number;
  basic_information: {
    artists: { name: string }[];
    title: string;
    cover_image: string;
    year: number;
  };
}
