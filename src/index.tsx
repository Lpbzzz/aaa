import dva  from 'dva';
import createLoading  from 'dva-loading';
import {createBrowserHistory as createHistory,createHashHistory} from 'history'



const app = dva({
    history: createHashHistory()
});

app.use(createLoading());

app.model(require('./models/list').default);

app.router(require('./router').default);

app.start('#root');
