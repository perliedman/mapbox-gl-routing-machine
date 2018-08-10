export function whenLoaded (map, fn) {
  if (map.loaded()) {
    fn(map)
  } else {
    map.once('load', () => fn(map))
  }
}
