
import { Pair, Dict } from "../../interfaces"

export class StringDict<V> implements Dict<string, V> {

  _values: { [key: string]: V } = Object.create(null)

  add([key, val]: Pair<string, V>) {
    this.addPair(key, val)
  }

  has(pair: Pair<string, V>) {
    return this.hasKey(pair[0])
  }

  addPair(key: string, value: V) {
    if (this._values[key] !== undefined)
      throw new Error(`key ${key} already taken`)
    this._values[key] = value
  }

  hasValue(val: V) {
    for (const key of Object.keys(this._values)) {
      const otherVal = this._values[key]
      if (otherVal === val)
        return true
    }
    return false
  }

  getValue(key: string) {
    const value = this._values[key]
    if (value === undefined)
      throw new Error(`key ${key} not found`)
    return value
  }

  hasKey(key: string) {
    return this._values[key] !== undefined
  }

  *iterator(): Iterator<Pair<string, V>> {
    for (const key of Object.keys(this._values))
      yield [key, this._values[key]]
  }

  [Symbol.iterator]() {
    return this.iterator()
  }

  delete(pair: Pair<string, V>) {
    this.deleteKey(pair[0])
  }

  deleteKey(key: string) {
    if (this._values[key] === undefined)
      throw new Error(`key ${key} not found`)
  }

  deleteValue(value: V) {
    for (const key of Object.keys(this._values)) {
      const otherValue = this._values[key]
      if (value === otherValue)
        delete this._values[key]
    }
  }

  clear() {
    this._values = Object.create(null)
  }

}

export default StringDict

