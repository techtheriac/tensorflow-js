import * as tf from "@tensorflow/tfjs";
// Defines shape (dimension of Tensor)
const shape = [4, 2];
//Tensor (Immutable)
const data = tf.tensor([3, 4, 6, 7, 6, 7, 7, 9], shape);
//Print instance for data
data.print();
