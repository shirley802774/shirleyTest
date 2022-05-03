import React from 'react';
import './personalCard.scss';
import prodImg from '../../../assets/images/log/w360xh360.png';

const PersonalCard = () => {
  return (
    <div className='c-personalCard'>
      {/*未登入時加上c-personalCard--logout狀態*/}
      <div className='c-personalCard__shippingSign'></div>
      <ul className='c-personalCard__greeting'>
        <li className='c-personalCard__account'>emei213456789</li>
        <li className='c-personalCard__speak'>晚安！</li>
      </ul>
      <div className='c-personalCard__welcome'>歡迎回來！</div>
      <div className='c-personalCard__loginBtn'>
        <button className='o-btn o-btn--tertiary'>登入</button>
        {/* o-btn按鈕到時整合改帶入共用按鈕元件 */}
      </div>
      <div className='c-personalCard__function'>
        <a href='' className='c-personalCard__fnBtn'>
          <i className='c-personalCard__iconFn c-personalCard__iconFn--member'></i>
          <span className='c-personalCard__fnName'>我的帳號</span>
        </a>
        <a href='' className='c-personalCard__fnBtn'>
          <i className='c-personalCard__iconFn c-personalCard__iconFn--cart'></i>
          <span className='c-personalCard__bubble'>1</span>
          <span className='c-personalCard__fnName'>購物車</span>
        </a>
        <a href='' className='c-personalCard__fnBtn'>
          <i className='c-personalCard__iconFn c-personalCard__iconFn--coupon'></i>
          <span className='c-personalCard__bubble'>3</span>
          <span className='c-personalCard__fnName'>折價券</span>
        </a>
        <a href='' className='c-personalCard__fnBtn'>
          <i className='c-personalCard__iconFn c-personalCard__iconFn--wishList'></i>
          <span className='c-personalCard__fnName'>追蹤清單</span>
        </a>
      </div>
      <dl className='c-personalCard__section c-personalCard__section--order'>
        {/*加上c-personalCard__section--null來切換無資料時的畫面*/}
        <dt>
          訂單
          <a href='' className='c-personalCard__more'>
            <i className='o-icon o-icon--arrowMore'></i>
            {/* o-icon--arrowMore到時整合改帶入共用icon元件 */}
          </a>
        </dt>
        <dd>
          <a href='' className='c-personalCard__ordered'>
            <h5 className='c-personalCard__prodName'>Aesop賦活芳香手部清潔露(500ml)-國際航空版</h5>
            <ul>
              <li className='c-personalCard__prodCount'>共 3 件</li>
              <li className='c-personalCard__prodStatus'>13:40 已送達</li>{' '}
              {/*即時物流狀態有5種：收到訂單、撿貨、理貨、出貨、已送達*/}
            </ul>
          </a>
          <div className='c-personalCard__nullMsg'>尚無6個月內的訂單</div>
        </dd>
      </dl>
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
      <dl className='c-personalCard__section c-personalCard__section--seen'>
        {/*加上c-personalCard__section--null來切換無資料時的畫面*/}
        <dt>上次看過</dt>
        <dd>
          <a href='' className='c-personalCard__prod'>
            <div className='c-personalCard__prodImg'>
              <img src={prodImg} alt='prodImg' />
            </div>
            <span className='c-personalCard__prodPrice'>$249</span>
          </a>
          <a href='' className='c-personalCard__prod'>
            <div className='c-personalCard__prodImg'>
              <img src={prodImg} alt='prodImg' />
            </div>
            <span className='c-personalCard__prodPrice'>$16,720</span>
          </a>
          <div className='c-personalCard__nullMsg'>快來逛逛吧！</div>
        </dd>
      </dl>
      <dl className='c-personalCard__section c-personalCard__section--marketing'>
        <dd className='c-personalCard__mktImg'></dd>
      </dl>
    </div>
  );
};
export default PersonalCard;
