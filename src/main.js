import {Control as ControlComponent, Waypoint, OSRMv1} from 'routing-components'
import Marker from './components/Marker.html'
import RouteLine from './components/RouteLine.html'
import {whenLoaded} from './utils'

const defaultOptions = {
  Marker,
  RouteLine
}

export class Control {
  constructor (options) {
    options = Object.assign({}, defaultOptions, options)
    options.waypoints = options.waypoints && options.waypoints.map(wp => {
      if (wp instanceof Waypoint) {
        return wp
      } else {
        return new Waypoint(wp)
      }
    })

    options.router = options.router || new OSRMv1(options)

    if (!options.container) {
      options.container = document.createElement('div')
      options.container.classList.add('mapbox-gl-routing-control')
      options.map.getContainer().appendChild(options.container)
    }

    this.options = options

    whenLoaded(options.map, () => {
      this.control = new ControlComponent({
        target: this.options.container,
        data: Object.assign({}, options)
      })
    })
  }

  destroy () {
    whenLoaded(() => this.control.destroy())
  }
}
