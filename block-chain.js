function blockChain(data, prev = { index: 0, hash: '0' }) {
    let ci = prev.index + 1;
    let block = {
        index: ci,
        hash: hashCode(ci + prev.hash + JSON.stringify(data)),
        data,
        prev,
    }
    block.chain = (d) => {
        return blockChain(d, block);
    }
    return block;
}