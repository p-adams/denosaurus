import { searchDirectory } from "./search/index.ts";

async function main() {
  const _results = await searchDirectory("../../mock_data", "Nulla");
}

main();
