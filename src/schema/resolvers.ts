import { merge } from "lodash";

import book from "./book/resolvers";
import author from "./author/resolvers";

const resolvers = merge(book, author);

export default resolvers;
