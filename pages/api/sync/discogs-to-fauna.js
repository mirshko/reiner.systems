/* eslint-disable no-console */

import { getRecordsInDiscogs } from "../../../lib/discogs";
import { createRecordsInFauna, getRecordsInFauna } from "../../../lib/fauna";

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

      const refs = await createRecordsInFauna(recordsInDiscogs);

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
