import React, { PureComponent } from 'react';
import App from '@/app'
import { Layout, Calendar } from 'antd';

import MainMenu from '../components/MainMenu'

const { Footer } = Layout

function onPanelChange(value, mode) {
  console.log(value, mode);
}

class BasicLayout extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <App>
        <Layout>
          <MainMenu />
          { children }

          <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>

          <Footer>footer </Footer>
        </Layout>
      </App>
    )
  }
}

export default BasicLayout;

