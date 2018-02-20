import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './components/list/list';
import registerServiceWorker from './registerServiceWorker';

const source = [{title: 'Apple', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa ', adtionalInformation: {date:'21 feb', image: 'http://juliandance.org/wp-content/uploads/2016/01/RedApple.jpg'}},
                {title: 'Orange', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa ', adtionalInformation: {date:'22 feb', image: 'https://www.oasis-botanical.ca/wp-content/uploads/2017/02/orange-web.jpg'}},
                {title: 'Grape', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa ', adtionalInformation: {date:'23 feb', image: 'http://www.welchs.com/themes/welchs/build/images/grapes--promo.png'}},
                {title: 'title 03', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa ', adtionalInformation: {date:'24 feb', image: ''}},
                {title: 'title 04', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa ', adtionalInformation: {date:'25 feb', image: ''}},
                {title: 'title 05', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa ', adtionalInformation: {date:'26 feb', image: ''}},
                {title: 'title 06', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa ', adtionalInformation: {date:'27 feb', image: ''}},
                {title: 'title 07', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa ', adtionalInformation: {date:'28 feb', image: ''}},
                {title: 'title 08', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa ', adtionalInformation: {date:'01 mar', image: ''}}];


ReactDOM.render(<List source={source}/>, document.getElementById('root'));
registerServiceWorker();
