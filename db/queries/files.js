import client from "../client.js";

export const createFile = async (fileName, fileSize, fileFolderId) => {
  const {
    rows: [createdFile],
  } = await client.query(
    `
    INSERT INTO files (name, size, folder_id)
    VALUES ($1, $2, $3)
    RETURNING *;
  `,
    [fileName, fileSize, fileFolderId],
  );

  return createdFile;
};
