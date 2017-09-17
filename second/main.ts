import { Connector } from './connector';
import { Tiger } from './tiger';

let tiger: Tiger = new Tiger();
tiger.run();

console.log(`legs are ${tiger.legs}`);

let con : Connector = new Connector();
con.connect(`http://codekul.com`);
