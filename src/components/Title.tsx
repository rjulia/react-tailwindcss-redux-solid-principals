// create a title component with porps of title and tag like h1, h2, h3, h4, h5, h6

const Title = ({ title, tag, classnames }: {
  title: string,
  tag: string,
  classnames?: string
}) => {
  console.log('Title');
  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag className={classnames}>{title}</Tag>
  );
}

export default Title;