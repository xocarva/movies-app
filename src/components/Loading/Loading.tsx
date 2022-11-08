import './Loading.css';

interface Props {
  className?: string;
}

export const Loading = ({ className, ...others }: Props) => {
  const cls = className ? className + ' loading' : 'loading';
  return (
    <div data-testid='loading-div' className={cls} {...others} />
  );
}
