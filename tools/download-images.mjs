#!/usr/bin/env zx
import "zx/globals";

try {
  /**
   * @type {import("../src/discogs").RecordInterface[]}
   */
  const vinyl = await fs.readJSON(
    `${process.cwd()}/src/data/vinyl-patched.json`
  );

  for (const record of vinyl) {
    const { cover_image, file_name } = record;

    const path = `${process.cwd()}/public/cover_images/${file_name}`;

    if (fs.existsSync(path)) {
      console.log(`'${file_name}'`, chalk.blue("found"));
    } else {
      console.log(`'${file_name}'`, chalk.red("missing"));

      console.log(`'${file_name}'`, chalk.yellow("downloading"));

      const res = await fetch(cover_image);

      const arrayBuffer = await res.arrayBuffer();

      await fs.writeFile(path, Buffer.from(new Uint8Array(arrayBuffer)));

      console.log(`'${file_name}'`, chalk.green("downloaded"));
    }
  }
} catch (p) {
  console.log(p);
}
