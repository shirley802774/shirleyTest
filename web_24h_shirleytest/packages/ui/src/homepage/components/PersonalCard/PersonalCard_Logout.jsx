import React from 'react';
import './personalCard.scss';

const PersonalCardLogout = () => {
  return (
    <div className='c-personalCard c-personalCard--logout'>
      {/*未登入時加上c-personalCard--logout狀態*/}
      <div className='c-personalCard__shippingSign'></div>
      <ul className='c-personalCard__greeting'>
        <li className='c-personalCard__speak'>午安你好！</li>
      </ul>
      <div className='c-personalCard__loginBtn'>
        <button className='o-btn o-btn--tertiary'>登入</button>
        {/* o-btn按鈕到時整合改帶入共用按鈕元件 */}
      </div>
      <dl className='c-personalCard__section c-personalCard__section--promo'>
        <dt>會員獨享</dt>
        <dd>
          <ul className='c-personalCard__slogan'>
            <li>
              <i className='c-personalCard__icon c-personalCard__icon--24h'></i>
              24小時快速到貨
            </li>
            <li>
              <i className='c-personalCard__icon c-personalCard__icon--coolingOff'></i>
              鑑賞期退貨保證
            </li>
            <li>
              <i className='c-personalCard__icon c-personalCard__icon--paying'></i>
              多元付款方式
            </li>
            <li>
              <i className='c-personalCard__icon c-personalCard__icon--zeroRate'></i>
              銀行分期零利率
            </li>
          </ul>
        </dd>
      </dl>
      <dl className='c-personalCard__section c-personalCard__section--marketing'>
        <dd className='c-personalCard__mktImg'></dd>
      </dl>
    </div>
  );
};
export default PersonalCardLogout;
