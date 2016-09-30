import reactWorkerDom from './react-worker-dom/page/index.js';

reactWorkerDom.render(new Worker('/static/app-worker.js'), document.getElementById('root'));
