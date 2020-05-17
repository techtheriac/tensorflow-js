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

const data3 = tf.tensor1d([1, 3, 5, 6]);
const data4 = tf.tensor1d([22, 43, 5, 5]);

data3.print();
data4.print();

//Adds, Multiplies and prints
data3.add(data4).print();
data3.mul(data4).print();
