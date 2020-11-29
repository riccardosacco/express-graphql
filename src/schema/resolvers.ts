import { merge } from "lodash";

import collection from "./collection/resolvers";
import record from "./record/resolvers";

const resolvers = merge(collection, record);

export default resolvers;
