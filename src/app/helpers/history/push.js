// @flow
const push = (props: Object, url: string) => {
  const { history } = props;
  history.push(url);
};

export default push;
