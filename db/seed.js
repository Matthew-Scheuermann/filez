import client from "./client.js";
import { createFolder } from "./queries/folders.js";
import { createFile } from "./queries/files.js";

const seed = async () => {
  const sales = await createFolder("Sales");
  const hr = await createFolder("Human Resources");
  const party = await createFolder("Party Planning Committee");

  await createFile("dundies_nominations.xlsx", 45, sales.id);
  await createFile("schrute_farms_beets.pdf", 120, sales.id);
  await createFile("jim_prank_log.txt", 8, sales.id);
  await createFile("client_list.xlsx", 90, sales.id);
  await createFile("stanley_crosswords.pdf", 60, sales.id);

  await createFile("complaint_form.pdf", 30, hr.id);
  await createFile("jim_prank_log.txt", 12, hr.id);
  await createFile("holly_flax_welcome.docx", 25, hr.id);
  await createFile("fire_drill_protocol.pdf", 70, hr.id);
  await createFile("toby_sad_playlist.mp3", 3500, hr.id);

  await createFile("casino_night_budget.xlsx", 55, party.id);
  await createFile("birthday_cake_order.pdf", 20, party.id);
  await createFile("jim_prank_log.txt", 5, party.id);
  await createFile("fun_run_flyer.png", 800, party.id);
  await createFile("threat_level_midnight.mp4", 9000, party.id);
};

await client.connect();
await seed();
await client.end();
console.log("🌱 Database seeded.");
