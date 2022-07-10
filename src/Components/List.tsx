import React from 'react'

interface IProps<T> {
  items: T[]
  renderItem: (item: T, index?: number) => JSX.Element
}

export default function List<T>(props: IProps<T>) {
  const { items, renderItem } = props
  return <>{items?.map(renderItem)}</>
}
