import { IGetInitialProps } from 'umi';
import { extend } from 'umi-request';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const request = extend({});
dayjs.extend(relativeTime);

const Home = props => {
  const { hot = [] } = props;
  return (
    <div>
      <ul className="divide-y divide-gray-100">
        {hot.map(recipe => {
          const time = dayjs
            .unix(recipe.last_touched)
            .locale('zh-cn')
            .fromNow();
          return (
            <article key={recipe.id} className="p-4 flex space-x-4">
              <img
                src={recipe.avatar}
                alt=""
                className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
                width="72"
                height="72"
              />
              <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                <h2 className="text-lg font-semibold text-black mb-0.5">
                  <a
                    href={recipe.url}
                    target="_blank"
                    className="underline"
                    rel="noopener noreferrer"
                  >
                    {recipe.title}
                  </a>
                </h2>
                <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
                  <div>
                    <dt className="sr-only">Time</dt>
                    <dd>
                      <abbr title={time}>{time}</abbr>
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Difficulty</dt>
                    <dd> · {recipe?.difficulty}</dd>
                  </div>
                  <div className="flex-none w-full mt-0.5 font-normal">
                    <dt className="inline">By</dt>{' '}
                    <dd className="inline text-black">{recipe.member}</dd>
                  </div>
                  <div className="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
                    <dd className="rounded-full bg-gray-300 py-1 px-2">
                      {recipe.replies}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          );
        })}
      </ul>
    </div>
  );
};

Home.getInitialProps = (async ctx => {
  if (ctx.isServer) {
    try {
      const result = await request('https://www.v2ex.com/api/topics/hot.json');
      const hot = result.map(item => ({
        id: item.id,
        title: item.title,
        avatar: item.node.avatar_large,
        url: item.url,
        last_reply_by: item.last_reply_by,
        last_touched: item.last_touched,
        member: item.member.username,
        replies: item.replies,
      }));

      return {
        hot,
      };
    } catch (e) {
      console.error('[Error]', e);
    }
  }
  return {};
}) as IGetInitialProps;

export default Home;
