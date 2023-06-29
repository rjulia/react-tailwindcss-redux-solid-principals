/* eslint-disable no-undef */

const Title = ({ title, tag, classnames }: {
  title: string,
  tag: string,
  classnames?: string
}) => {
  console.log('Title')
  const Tag = tag as keyof JSX.IntrinsicElements

  return (
    <Tag className={classnames}>{title}</Tag>
  )
}

export default Title
