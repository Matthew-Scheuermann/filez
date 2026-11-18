import client from "../client.js";

export const createFolder = async (folderName) => {
  const {
    rows: [createdFolder],
  } = await client.query(
    `
    INSERT INTO folders (name)
    VALUES ($1)
    RETURNING *;
    `,
    [folderName],
  );

  return createdFolder;
};
