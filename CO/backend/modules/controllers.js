
import Item from "../app.js";

const getAllTasks = async (req, res) => {
  const all = await Item.find({});
  return res.status(200).send(all);
};

const createNewTask = async (req, res) => {
  const { label, status, date } = req.body;
  const item1 = new Item({ label, status, date });
  item1.save(function (err, Item) {
    if (err) return console.error(err);
    console.log(Item.label + " saved");
  });
  return res.status(200).send(item1);
};
const changeTaskInfo = async (req, res) => {
  const { label, status } = req.body;
  const item = await Item.findOneAndUpdate(
    { _id: req.params.id },
    { label, status }
  );
  console.log(item);
  return res.status(200).send();
};
const deleteTask = async (req, res) => {
  await Item.deleteOne({ _id: req.params.id });
  return res.status(200).send();
};
export { getAllTasks, createNewTask, changeTaskInfo, deleteTask };
