import Dexie from 'dexie';

export const todo_db = new Dexie('todolist');
todo_db.version(1).stores({
  thought: '++id, timestampms', // Primary key and indexed props
});

// try {
//   await todo_db.thought.clear();
// } catch (err) {
//   console.log(`clear thought failed, err: ${err}`);
// }