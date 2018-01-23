import BigNumber from "bignumber.js";
import { Account, Time } from "../src/lib/types";

const should = require("chai")
  .use(require("chai-as-promised"))
  .use(require("chai-bignumber")(BigNumber))
  .should();

describe("Basic Type", () => {
  describe("Account", () => {
    it("ethereum address test", () => {
      const address = "0x557678cf28594495ef4b08a6447726f931f8d787";

      const { error } = Account().validate(address);

      should.not.exist(error);
    });
  });

  describe("Time", () => {
    it("date format test", () => {
      const dateString = "10/20/2017 04:30";

      const { error } = Time().validate(dateString);

      should.not.exist(error);
    });
  });
});
