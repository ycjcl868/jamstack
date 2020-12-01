import { IApi } from 'umi';

export default (api: IApi) => {
  api.modifyBabelPresetOpts(memo => {
    memo.env!.useBuiltIns = 'usage';
    return memo;
  });
};
