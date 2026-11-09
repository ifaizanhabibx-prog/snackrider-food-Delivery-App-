/* global require, process, __dirname */
require("dotenv").config({ path: __dirname + "/.env" });

const uri = process.env.MONGO_URI;

if (!uri) {
  console.log("MONGO_URI is missing");
  process.exit(1);
}

const parts = uri.match(
  /^(mongodb(?:\+srv)?:\/\/)([^:]+):([^@]+)@([^/]+)(\/[^?]*)?(\?.*)?$/,
);

console.log("URI matches MongoDB structure:", Boolean(parts));

if (parts) {
  console.log("Scheme:", parts[1]);
  console.log("Username present:", Boolean(parts[2]));
  console.log("Password present:", Boolean(parts[3]));
  console.log("Host:", parts[4]);
  console.log("Database:", parts[5] || "(not specified)");
  console.log("Query:", parts[6] || "(not specified)");
}
