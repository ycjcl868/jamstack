import { IGetInitialProps } from 'umi';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

dayjs.locale('zh-cn');
dayjs.extend(utc);
dayjs.extend(timezone);

export interface LayoutProps {
  date: string;
}

const Layout: React.FunctionComponent<LayoutProps> = props => {
  return (
    <>
      <Header />
      <div className="xl:max-w-2xl mx-auto">{props.children}</div>
      <Footer date={props.date} />
    </>
  );
};

Layout.getInitialProps = (async ctx => {
  if (ctx.isServer) {
    const date = dayjs(new Date())
      .tz('Asia/Shanghai')
      .locale('zh-cn')
      .format('YYYY-MM-DDT HH:mm:ss');
    return {
      date,
    };
  }
}) as IGetInitialProps;

export default Layout;
