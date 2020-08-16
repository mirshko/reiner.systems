import { createRecordsInFauna, getRecordsInFauna } from "../../../lib/fauna";
import { getRecordsInDiscogs } from "../../../lib/discogs";
import { getYouTubeVideoId } from "../../../lib/youtube";

export default async (req, res) => {
  try {
    /**
     * Get records from Discogs and schematize
     */
    const recordsInDiscogs = await getRecordsInDiscogs();

    console.log("Number Of Records In Discogs:", recordsInDiscogs.length);

    /**
     * Get records from Fauna
     */
    const recordsInFauna = await getRecordsInFauna();

    console.log("Number Of Records In Fauna:", recordsInFauna.length);

    /**
     * Check if Discogs & Fauna collection are out of sync, if so, update Fauna collection from Discogs initially
     */
    if (recordsInFauna.length < recordsInDiscogs.length) {
      console.log("Fauna & Discogs Collections Are Out Of Sync! Updating!");

      await createRecordsInFauna(recordsInDiscogs);
    }

    /**
     * Get videos in Fauna that do not have a valid 'video_id'
     */
    const recordsWithoutVideos = recordsInFauna.filter(
      (record) => record?.video_id === "null"
    );

    console.log("Number Of Records w/o Videos:", recordsWithoutVideos.length);

    /**
     * Attempt to populate records without videos with a YouTube video
     */
    const recordsToUpdate = await Promise.all(
      recordsWithoutVideos.map(getYouTubeVideoId)
    );

    /**
     * Filter out 'undefined' results from 'getYouTubeVideoId' call
     */
    const validRecordsToUpdate = recordsToUpdate.filter(Boolean);

    console.log("Number Of Records To Update:", validRecordsToUpdate.length);

    if (validRecordsToUpdate.length > 0) {
      /**
       * Update the records in Fauna with new updated 'video_id' property
       */
      const refs = await createRecordsInFauna(validRecordsToUpdate);

      res.status(200).json({
        success: true,
        message: `Successfully Updated ${refs.length} Records`,
        result: refs,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "No Records Need Updating",
        result: [],
      });
    }
  } catch (err) {
    console.log(err);

    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
