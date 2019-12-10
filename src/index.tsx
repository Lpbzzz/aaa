import dva  from 'dva';
import createLoading  from 'dva-loading';




const app = dva();
app.use(createLoading());
app.model(require('./models/list').default);
app.router(require('./router').default);
app.start('#root');
