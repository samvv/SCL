
import UnorderedContainer from "./Unordered"
import UniqueContainer from "./Unique"

export interface Pair<K, V> {
  key: K
  value: V
}

export interface Dict<K, V> extends UniqueContainer<Pair<K, V>>, UnorderedContainer<Pair<K, V>> {
  addPair(key: K, value: V)
  hasKey(key: K): boolean
  hasValue(value: V): boolean
  getValue(key: K): V
  deleteKey(key: K): void
  deleteValue(value: V): void
}

