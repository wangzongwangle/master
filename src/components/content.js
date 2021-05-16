import React from 'react';
import RequestFormModal from './requestFormModal'
import './components.less';

const MyContent = () => (
    <div className='myBox'>
        <div className='contentTitle'>A better way to enjoy everyday.</div>
        <div style={{margin:'10px 0'}}>be the first to know when we launch.</div>
        <div>
            <RequestFormModal/>
        </div>
    </div>
);

export default MyContent;