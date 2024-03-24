import Dexie from 'dexie';

export const todo_db = new Dexie('todolist');
todo_db.version(3).stores({
  thought: '++id, timestampms', // Primary key and indexed props
  todo: '++id'
});

// try {
//   await todo_db.thought.clear();
// } catch (err) {
//   console.log(`clear thought failed, err: ${err}`);
// }