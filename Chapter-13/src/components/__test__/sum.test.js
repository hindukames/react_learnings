import { sum } from "../sum.js"

test("Check the sum of 2 positive numbers", ()=>{
    expect(sum(2,5)).toBe(7);
});