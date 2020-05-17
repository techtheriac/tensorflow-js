import * as tf from "@tensorflow/tfjs";

const shape = [4, 2];

const data = tf.tensor([3, 4, 6, 7, 6, 7, 7, 9], shape);

data.print();

console.log("Testing");
