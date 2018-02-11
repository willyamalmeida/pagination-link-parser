const newRx = exp => new RegExp(exp);

const exec = (rx, str) => rx.exec(str);
const makeExec = rx => str => exec(rx, str);

const rxRel = makeExec(/rel="(.+)"/);
const rxPage = page => makeExec(newRx(`[?|&]${page}=(\\d+)`));
const rxPerPage = perPage => makeExec(newRx(`[?|&]${perPage}=(\\d+)`));

export { rxRel, rxPage, rxPerPage };
