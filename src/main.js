import * as tf from "@tensorflow/tfjs";
// Defines shape (dimension of Tensor)
const shape = [4, 2];
//Tensor (Immutable)
const data = tf.tensor([3, 4, 6, 7, 6, 7, 7, 9], shape);

//Set Variable (Mutable) with Zeros method
const data2 = tf.variable(tf.zeros([8]));

//Print instance for data
data2.print();

//Mutating data2 with data of  one dimension
data2.assign(tf.tensor1d([1, 0, 4, 6, 89, 9, 0, 9]));
data2.print();
