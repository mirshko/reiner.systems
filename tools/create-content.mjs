#!/usr/bin/env zx
import "zx/globals";

try {
  const vinyl = await fs.readJSON(
    `${process.cwd()}/src/data/vinyl-patched.json`,
  );

  for (const record of vinyl) {
    const { resource_id } = record;

    const path = `${process.cwd()}/src/content/vinyl/${resource_id}.json`;

    await fs.writeJSON(path, record);

    console.log(`'${resource_id}.json'`, chalk.green("created"));
  }
} catch (error) {}
