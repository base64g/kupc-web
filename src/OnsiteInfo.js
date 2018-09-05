import React, { Component } from 'react';
import './OnsiteInfo.css'
import ClassNames from 'classnames';
import AtndIcon from './icon/atnd.png';

class OnsiteInfo extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className={ClassNames("OnsiteInfo", this.props.className)}>
        <div className="participate">
          <header>参加方法</header>
          <ol>
            <li>
              <header>会場参加</header>
              <div>
                <p>オンサイト会場は東京会場と京都会場がございます</p>
                <p>ATNDにて参加を受け付けておりますので、以下のリンクから参加登録をお願いします</p>
                <ul className="list-with-icon">
                  <li><a href={data.url_atnd_tokyo}>
                    <img src={AtndIcon} alt="Atnd" />
                    <span>京都大学プログラミングコンテスト{data.suffix} ~東京オンサイト~</span>
                  </a></li>
                  <li><a href={data.url_atnd_kyoto}>
                    <img src={AtndIcon} alt="Atnd" />
                    <span>京都大学プログラミングコンテスト{data.suffix} ~京都オンサイト~</span>
                  </a></li>
                </ul>
                <p>会場には無線LANが使用可能なノートPCを持参してください</p>
                <p>当日の集合場所やスケジュール等の情報につきましては、各ATNDページをご参照ください</p>
              </div>
            </li>
            <li>
              <header>オンライン参加</header>
              <div>
                <p>オンラインで参加される場合は事前申し込みは必要ございません</p>
                <p><a href={data.url_open_contest}>コンテストページ</a> より直接ご参加下さい</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default OnsiteInfo;