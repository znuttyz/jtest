import React, { Component } from 'react';
import Link from 'next/link'
import { Head, Title, Albumx3, Albumx4, Footer, Header, Nav2 } from './components';
// import'isomorphic-unfetch';

import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { initStore, catFetch, setLanguage, fetchLanguage, fetchTitle, fetchDesc, fetchFooter } from './actions';


import stylesheet from 'styles/index.scss'

class Home extends Component {

  constructor() {
    super();
    this.state = {
      nav: [],
      lang: '',
      title: [],
      descs: [],
      footers: []
    }
  }

  componentWillMount() {
    this.props.fetchLanguage()
    this.props.catFetch()
    this.props.fetchTitle(1)
    this.props.fetchDesc(1)
    this.props.fetchFooter()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.categories) {
      this.setState({nav: nextProps.categories})
    }
    if(nextProps.lang) {
      this.setState({lang: nextProps.lang.lang})
    }
    if(nextProps.title) {
      let temp = [];
      {nextProps.title.map(item => temp.push(Object.values(item)))}
      this.setState({title: temp})
    }
    if(nextProps.descs) {
      let temp = [];
      {nextProps.descs.map(item => temp.push(Object.values(item)))}
      this.setState({descs: temp})
    }
    if(nextProps.footers) {
      let temp = [];
      {nextProps.footers.map(item => temp.push(Object.values(item)))}
      this.setState({footers: temp})
    }
  }

  handleSetLanguage(lang) {
    console.log('setLanguage', lang)
    this.props.setLanguage(lang, 1);
    this.setState({lang})
  }

  socialLanguage() {
    if(this.state.lang === "th") {
      return (
        <p className="desc">{this.state.descs[1]}&nbsp;
          <a className="socialLink" target="_blank" href="www.facebook.com/nuttapon.phannurat">Facebook</a> และ&nbsp;
          <a className="socialLink" target="_blank" href="www.instagram.com/znuttyz">Instagram</a>
        </p>
      )
    } else if(this.state.lang === "en") {
      return (
        <p className="desc">{this.state.descs[1]}&nbsp;
          <a className="socialLink" target="_blank" href="www.facebook.com/nuttapon.phannurat">Facebook</a> and&nbsp;
          <a className="socialLink" target="_blank" href="www.instagram.com/znuttyz">Instagram</a>
        </p>
      )
    }
  }

  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

        <Head title="PHANNURAT GEMS & JEWELRY"/>

        <Header lang={this.state.lang} onHandle={this.handleSetLanguage.bind(this)}/>

        <Nav2 style={{marginTop: '5px'}} items={this.state.nav}/>

        <div className="container">
          <Title name={this.state.title[0]} />
          <p className="desc">
            {this.state.descs[0]} <a>(more..)</a>
          </p>
        </div>

        <div className="container">
          <Albumx3 />
        </div>

        <div className="container">
          <Title name={this.state.title[1]} />
          {this.socialLanguage()}
        </div>

        <div className="container">
          <Albumx4 />
        </div>

        <Footer footers={this.state.footers}/>
      </div>
    );
  }
}

const mapStateToProps = ({language}) => {
  return {
    categories: language.categories.nav,
    lang: language.language,
    title: language.title,
    descs: language.descs,
    footers: language.footers
  };
};

export default withRedux(initStore, mapStateToProps, {
  catFetch, setLanguage, fetchLanguage, fetchTitle, fetchDesc, fetchFooter
})(Home);
