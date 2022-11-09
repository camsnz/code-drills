const {calcTotal, calcShippingCost, calcGst} = require("./Exercise01")

describe("exercise 01 tests", () => {
    calcGst,
    calcShippingCost,
    describe("calcGst()", () => {
        it("should give gst result", () => {
            expect(calcGst(10)).toEqual(1)
            expect(calcGst(1)).toEqual(0.1)
        })
    })

    describe("calcGst()", () => {
        it("should give shipping costs", () => {
            expect(calcShippingCost(2000)).toEqual(15)
            expect(calcShippingCost(4000)).toEqual(29)
        })
    })

    describe("calcTotals()", () => {
        it("should calc correct shipping and gst totals", () => {
            expect(calcTotal([5,6,7],2000)).toEqual(34.8)
            expect(calcTotal([5,6,7],3000)).toEqual(54.8)
            expect(calcTotal([5,6,7],4000)).toEqual(48.8)
            expect(calcTotal([5,6,7],5000)).toEqual(19.8)
        })
    })
})