const rewire = require("rewire")
const Cart = rewire("./Cart")
const mapStateToProps = Cart.__get__("mapStateToProps")

const mapDispatchToProps = Cart.__get__("mapDispatchToProps")
describe("mapStateToProps", () => {
    test("0", () => {
        mapStateToProps({})
    })

    test("1", () => {
        mapStateToProps({ addedItems: false })
    })

    test("2", () => {
        mapStateToProps({ addedItems: true })
    })
})


describe("mapDispatchToProps", () => {
    test("0", () => {
        mapDispatchToProps({})
    })

    test("1", () => {
        mapDispatchToProps({ type: "RECEIVE_MESSAGE" })
    })

    test("2", () => {
        mapDispatchToProps({ type: "ADD_TODO" })
    })

    test("3", () => {
        mapDispatchToProps({ NOTYPE: {}, type: "RECEIVE_MESSAGE" })
    })
})
