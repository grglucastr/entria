import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './components/list/list';
import registerServiceWorker from './registerServiceWorker';

const source = [{title: 'title 00', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa '},
                {title: 'title 01', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa '},
                {title: 'title 02', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa '},
                {title: 'title 03', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa '},
                {title: 'title 04', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa '},
                {title: 'title 05', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa '},
                {title: 'title 06', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa '},
                {title: 'title 07', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa '},
                {title: 'title 08', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vestibulum, molestie libero nec, placerat tortor. Nulla at massa '}];


ReactDOM.render(<List source={source}/>, document.getElementById('root'));
registerServiceWorker();
