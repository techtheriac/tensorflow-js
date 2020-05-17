import * as tf from "@tensorflow/tfjs";

//Tidy is used to free up GPU memory once
const simpleAdd = (m, n) =>
  tf.tidy(() => {
    const x1 = m;
    const x2 = n;
    const y = x1.add(x2);
    return y;
  });

export { simpleAdd };
