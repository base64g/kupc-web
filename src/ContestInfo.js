import React, { Component } from 'react';
import './ContestInfo.css'
import OnsiteInfo from './OnsiteInfo';
import Footer from './Footer';
import Title from './Title';
import Menu from './Menu';
import ClassNames from 'classnames';
import DocumentTitle from 'react-document-title';

class ContestInfo extends Component {
  isUpcomingContest() {
    return !('problems' in this.props.data);
  }
  render() {
    const data = this.props.data;
    const {suffix} = data;
    return (
      <DocumentTitle title={`京都大学プログラミングコンテスト ${suffix}`}>
        <div>
          <Title suffix={suffix} />
          <Menu selectedKey={suffix} />
          {this.isUpcomingContest() ?
            <UpcomingContestInfo data={data} className="ContestInfo" />
            : <OldContestInfo data={data} className="ContestInfo" />
          }
        </div>
      </DocumentTitle>
    );
  }
}
class UpcomingContestInfo extends Component {
  render() {
    const data = this.props.data;
    const {suffix} = data;
    if ('date' in data) data.date = new Date(data.date);
    const classes = ClassNames("UpcomingContestInfo", this.props.className);
    return (
      <div className={classes}>
        <div className="header">
          <p>京都大学プログラミングコンテスト(KUPC)は京都大学の学生が有志で主催するプログラミングコンテストです</p>
          {'date' in data ?
            <p>KUPC{suffix} は <strong>{data.date.getFullYear()}年{data.date.getMonth()+1}月{data.date.getDate()}日</strong> に行われます</p>
          : ''}
        </div>
        <OnsiteInfo data={data} className={classes} />
        {'links' in data ?
          <div className="links">
            <h3>コンテストページ</h3>
            <ul>
              {data.links.map(link =>
                <li key={link.url}>
                  <a href={link.url}>
                    {link.icon ?
                      <img src={link.icon} alt="" />
                    : ''}
                    <div>{link.title}</div>
                  </a>
                </li>
              )}
            </ul>
          </div>
        : ''}
        { 'staffs' in data ?
          <div className="staffs">
            <h3>運営</h3>
            <div>KUPC {suffix} は京都大学の学生によって構成される以下のメンバーで運営されています</div>
            <ul className="staffList">
            { data.staffs.map(staffName =>
              <li key={staffName}>{staffName}</li>
            )}
            </ul>
          </div>
        : ''}
        <Footer />
      </div>
    );
  }
}
class OldContestInfo extends Component {
  tryGetEditorial(fname) {
    try {
      return require(`./editorials/${this.props.data.suffix}/${fname}`);
    }
    catch (err) {}
  }
  // returns: [{id, title, url}]
  getEditorials() {
    const res = [];
    // summary
    const summaryPdf = this.tryGetEditorial('summary.pdf');
    if (summaryPdf) res.push({ id: 'summary', title: '総評', url: summaryPdf, className: "summary" });
    // problem editorials
    const {problems} = this.props.data;
    if (problems) {
      for (const {id, title} of problems) {
        const probPdf = this.tryGetEditorial(`${id}.pdf`);
        if (probPdf) res.push({ id: `prob${id}`, title: `${id}: ${title}`, url: probPdf, className: "editorial" });
      }
    }
    return res;
  }
  render() {
    const data = this.props.data;
    const {suffix} = data;
    if ('date' in data) data.date = new Date(data.date);
    const editorials = this.getEditorials();
    return (
      <div className={ClassNames("OldContestInfo", this.props.className)}>
        {'date' in data ?
          <div className="date"><p>KUPC{suffix} は {data.date.getFullYear()}年{data.date.getMonth()+1}月{data.date.getDate()}日 に行われました</p></div>
        : ''}
        {'links' in data ?
          <div className="links">
            <h3>問題・結果</h3>
            <ul>
              {data.links.map(link =>
                <li key={link.url}>
                  <a href={link.url}>
                    {link.icon ?
                      <img src={link.icon} alt="" />
                    : ''}
                    <div>{link.title}</div>
                  </a>
                </li>
              )}
            </ul>
          </div>
        : ''}
        <div className="editorials">
          <h3>解説</h3>
          { editorials.length > 0 ?
            <ul>
              {editorials.map(({id, title, url, className}) =>
                  <li key={id} className={className}><a href={url}>
                    {title}
                  </a></li>
              )}
            </ul>
            : <div>準備中です.</div>
          }
        </div>
        { 'staffs' in data ?
          <div className="staffs">
            <h3>運営</h3>
            <div>KUPC {suffix} は以下のメンバーで運営されました</div>
            <ul className="staffList">
            { data.staffs.map(staffName =>
              <li key={staffName}>{staffName}</li>
            )}
            </ul>
          </div>
        : ''}
        <Footer />
      </div>
    );
  }
}

export default ContestInfo;
