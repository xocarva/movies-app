import './Loading.css';

interface Props {
  className?: string;
}

export const Loading = ({ className, ...others }: Props) => {
  const cls = className ? className + ' loading' : 'loading';
  return (
    <div className={cls} {...others} />
  );
}
