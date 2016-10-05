export const name = 'Mocha Chai template';
export const dispatcher = 'state = reducer(${prevState}, ${action});';
export const assertion = 'expect(state${path}).deep.equal(${curState});';
export const wrap = (
`
    it('should handle', () => {
        \${assertions}
    });
`);

export default { name, assertion, dispatcher, wrap };
