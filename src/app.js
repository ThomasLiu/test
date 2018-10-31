import intl from "react-intl-universal";
import _ from "lodash";
import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import { getI18n } from '@/services/base';

// 设置国际化
import enUS from 'antd/lib/locale-provider/en_US';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

const SUPPOER_LOCALES = [
  {
    name: "English",
    value: "en-US"
  },
  {
    name: "简体中文",
    value: "zh-CN"
  }
];

const uploadLocaleType = (changeTo) =>{
  localStorage.setItem('lang_type', changeTo);
}

const getCurrentLocale = () => {
  let currentLocale = intl.determineLocale({
    urlLocaleKey: "lang",
    cookieLocaleKey: "lang"
  });
  currentLocale = currentLocale || localStorage.getItem('lang_type') || 'en-US'
  if (!_.find(SUPPOER_LOCALES, { value: currentLocale })) {
    currentLocale = "en-US";
  }
  uploadLocaleType(currentLocale);
  return currentLocale
}


const getLocale = () => getCurrentLocale() === 'en-US' ? enUS : zhCN

class App extends Component {
  state = { initDone: false };

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {
    const currentLocale = getCurrentLocale()

    getI18n(currentLocale).then(res => 
      // init method will load CLDR locale data according to currentLocale
       intl.init({
        currentLocale,
        locales: {
          [currentLocale]: res.data
        }
      })
    ).then(() => {
      // After loading CLDR locale data, start to render
      this.setState({ initDone: true });
    });
  }

  render() {
    const { initDone } = this.state
    const { children } = this.props
    return (
      initDone &&
      <LocaleProvider locale={getLocale()}>
        { children }
      </LocaleProvider>
    );
  }
}

export default App;