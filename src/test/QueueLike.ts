
import { expect } from "chai";
import { Queuelike } from "../interfaces.js";
import { test } from "./_helpers.js";

test("QueueLike.add() returns a cursor to the added element", (seq: Queuelike<number>) => {
  const [added1, pos1] = seq.add(1);
  expect(added1).to.be.true;
  expect(pos1.value).to.equal(1);
});
