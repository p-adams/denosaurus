import { searchDirectory } from "./search/index.ts";

async function main() {
  const args = Deno.args;
  const results = await searchDirectory("../../mock_data", args[0]);
  console.log(results);
}

main();
