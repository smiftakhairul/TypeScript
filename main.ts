import { Point } from './class_n_access_modifiers';

let point = new Point(2, 3);
point.draw();
console.log(point.getX());
point.setX(100);
console.log(point.getX());
point.setX(0);
console.log(point.getX());