const timeout = require("./warmUp")

jest.useFakeTimers();

test('waits 300 ms',() => {
    timeout();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
})