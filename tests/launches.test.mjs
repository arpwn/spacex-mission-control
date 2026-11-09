import test from "node:test";
import assert from "node:assert/strict";
import { filterLaunches } from "../lib/launches.ts";
const data = [
  { id: "a", name: "Crew-5", date_utc: "2022-10-05T00:00:00Z", success: true },
  {
    id: "b",
    name: "Scheduled",
    date_utc: "2022-12-01T00:00:00Z",
    success: null,
  },
  { id: "c", name: "Falcon", date_utc: "2006-03-24T00:00:00Z", success: false },
];
const filters = { query: "", status: "confirmed", year: "all", sort: "newest" };
test("la vista inicial excluye registros sin resultado y no altera el archivo", () => {
  assert.deepEqual(
    filterLaunches(data, filters).map((l) => l.id),
    ["a", "c"],
  );
  assert.equal(data[0].id, "a");
});
test("combina nombre, año y resultado y permite consultar registros sin confirmar", () => {
  assert.deepEqual(
    filterLaunches(data, {
      ...filters,
      query: "crew",
      year: "2022",
      status: "success",
    }).map((l) => l.id),
    ["a"],
  );
  assert.equal(
    filterLaunches(data, { ...filters, status: "unconfirmed" })[0].id,
    "b",
  );
  assert.equal(filterLaunches(data, { ...filters, year: "2021" }).length, 0);
});
