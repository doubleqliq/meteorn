// import createDDP from '../util/createDDP'

import {Component, PropTypes} from 'react-native'

export default class Meteor extends Component {
  static propTypes = PropTypes.shape({
    connection: PropTypes.object.isRequired
  })

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View />
    )
  }
}
