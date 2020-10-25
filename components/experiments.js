import { experiments, projects } from "../data";
import List from "./list";

const Experiments = () => {return  <List data={[...projects, ...experiments]} />}

export default Experiments