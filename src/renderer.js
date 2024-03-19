/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

console.log('👋 This message is being logged by "renderer.js", included via Vite');
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import thought from "./thought/Thought.vue"
import todolist from "./todolist/TodoList.vue"
import calender from "./calender/Calender.vue"
import setting from "./setting/Setting.vue"

const app = createApp(App);

const routes = [
  { path: "/", redirect: "thought" },
  { path: "/thought", component: thought },
  { path: "/todolist", component: todolist },
  { path: "/calender", component: calender },
  { path: "/setting", component: setting },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

app.use(router);

app.use(ElementPlus).mount('#app');
