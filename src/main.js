import * as tf from "@tensorflow/tfjs";
import { simpleAdd } from "./models";
import { data, data2, data3, data4 } from "./primal";

const mod = simpleAdd(data3, data4);
mod.print();
